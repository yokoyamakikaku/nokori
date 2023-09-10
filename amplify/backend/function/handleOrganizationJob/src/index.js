/* Amplify Params - DO NOT EDIT
	API_NOKORI_ACCOUNTROLETABLE_ARN
	API_NOKORI_ACCOUNTROLETABLE_NAME
	API_NOKORI_ACCOUNTTABLE_ARN
	API_NOKORI_ACCOUNTTABLE_NAME
	API_NOKORI_GRAPHQLAPIIDOUTPUT
	API_NOKORI_ORGANIZATIONJOBTABLE_ARN
	API_NOKORI_ORGANIZATIONJOBTABLE_NAME
	API_NOKORI_ORGANIZATIONTABLE_ARN
	API_NOKORI_ORGANIZATIONTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const { v4: uuid } = require('uuid')
const { DynamoDB } = require('@aws-sdk/client-dynamodb')
const { marshall, unmarshall } = require('@aws-sdk/util-dynamodb')

/**
 * @type {import('@types/aws-lambda').DynamoDBStreamHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`)

  for (const record of event.Records) {
    if (record.eventName !== 'INSERT') continue
    const dynamoDB = new DynamoDB({})
    try {
      const { id, createName, createAccountName, createUserId, owner } = unmarshall(record.dynamodb.NewImage)

      if (typeof createName !== 'string') throw Error('InvalidJob: createName is not string')
      if (typeof createAccountName !== 'string') throw Error('InvalidJob: createAccountName is not string')
      if (typeof createUserId !== 'string') throw Error('InvalidJob: createUserId is not string')
      if (typeof owner !== 'string') throw Error('InvalidJob: owner is not string')
      console.log({ createUserId, owner })

      await dynamoDB.updateItem({
        TableName                : process.env.API_NOKORI_ORGANIZATIONJOBTABLE_NAME,
        Key                      : marshall({ id }),
        UpdateExpression         : 'SET #status=:status',
        ExpressionAttributeNames : { '#status': 'status' },
        ExpressionAttributeValues: marshall({ ':status': 'STARTED' }),
      })

      // NOTE: 組織の作成
      const orgnizationId = uuid()
      await dynamoDB.putItem({
        TableName: process.env.API_NOKORI_ORGANIZATIONTABLE_NAME,
        Item     : marshall({
          id       : orgnizationId,
          name     : createName,
          createdAt: new Date().toISOString(),
          udpatedAt: new Date().toISOString(),
        })
      })
      console.info('組織の作成が完了')

      // NOTE: アカウントの作成
      const accountId = uuid()
      await dynamoDB.putItem({
        TableName: process.env.API_NOKORI_ACCOUNTTABLE_NAME,
        Item     : marshall({
          id            : accountId,
          name          : createAccountName,
          userId        : createUserId,
          organizationId: orgnizationId,
          createdAt     : new Date().toISOString(),
          udpatedAt     : new Date().toISOString(),
        })
      })
      console.info('アカウントの作成が完了')

      // NOTE: 権限の作成
      const accountRoleId = uuid()
      await dynamoDB.putItem({
        TableName: process.env.API_NOKORI_ACCOUNTROLETABLE_NAME,
        Item     : marshall({
          id            : accountRoleId,
          accountId     : accountId,
          organizationId: orgnizationId,
          role          : 'MANAGER',
          createdAt     : new Date().toISOString(),
          udpatedAt     : new Date().toISOString(),
        })
      })
      console.info('アカウント権限の作成が完了')

      // NOTE: ジョブの更新
      await dynamoDB.updateItem({
        TableName               : process.env.API_NOKORI_ORGANIZATIONJOBTABLE_NAME,
        Key                     : marshall({ id }),
        UpdateExpression        : 'SET #status=:status, #createId=:createId, #updatedAt=:updatedAt',
        ExpressionAttributeNames: {
          '#status'   : 'status',
          '#createId' : 'createId',
          '#updatedAt': 'updatedAt'
        },
        ExpressionAttributeValues: marshall({
          ':status'   : 'FINISHED',
          ':createId' : orgnizationId,
          ':updatedAt': new Date().toISOString()
        }),
      })
      console.info('ジョブの更新を完了')

    } catch (error) {
      console.error(error)
      await dynamoDB.updateItem({
        TableName               : process.env.API_NOKORI_ORGANIZATIONJOBTABLE_NAME,
        Key                     : marshall({ id }),
        UpdateExpression        : 'SET #status=:status, #errorMessage=:errorMessage, #updatedAt=:updatedAt',
        ExpressionAttributeNames: {
          '#status'      : 'status',
          '#errorMessage': 'errorMessage',
          '#updatedAt'   : 'updatedAt'
        },
        ExpressionAttributeValues: marshall({
          ':status'      : 'FAILED',
          ':errorMessage': String(error),
          ':updatedAt'   : new Date().toISOString()
        }),
      })
    }
  }

  return Promise.resolve('Successfully processed DynamoDB record')
}
