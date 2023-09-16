/* Amplify Params - DO NOT EDIT
	API_NOKORIAPI_ACCOUNTCONFIGURATIONTABLE_ARN
	API_NOKORIAPI_ACCOUNTCONFIGURATIONTABLE_NAME
	API_NOKORIAPI_ACCOUNTROLETABLE_ARN
	API_NOKORIAPI_ACCOUNTROLETABLE_NAME
	API_NOKORIAPI_ACCOUNTTABLE_ARN
	API_NOKORIAPI_ACCOUNTTABLE_NAME
	API_NOKORIAPI_GRAPHQLAPIIDOUTPUT
	API_NOKORIAPI_ORGANIZATIONCONFIGURATIONTABLE_ARN
	API_NOKORIAPI_ORGANIZATIONCONFIGURATIONTABLE_NAME
	API_NOKORIAPI_ORGANIZATIONJOBTABLE_ARN
	API_NOKORIAPI_ORGANIZATIONJOBTABLE_NAME
	API_NOKORIAPI_ORGANIZATIONTABLE_ARN
	API_NOKORIAPI_ORGANIZATIONTABLE_NAME
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
  for (const record of event.Records) {
    if (record.eventName !== 'INSERT') continue
    const dynamoDB = new DynamoDB({})
    const { id, createName, createAccountName, createUserId, owner } = unmarshall(record.dynamodb.NewImage)
    try {
      if (typeof createName !== 'string') throw Error('InvalidJob: createName is not string')
      if (typeof createAccountName !== 'string') throw Error('InvalidJob: createAccountName is not string')
      if (typeof createUserId !== 'string') throw Error('InvalidJob: createUserId is not string')
      if (typeof owner !== 'string') throw Error('InvalidJob: owner is not string')

      await dynamoDB.updateItem({
        TableName                : process.env.API_NOKORIAPI_ORGANIZATIONJOBTABLE_NAME,
        Key                      : marshall({ id }),
        UpdateExpression         : 'SET #status=:status',
        ExpressionAttributeNames : { '#status': 'status' },
        ExpressionAttributeValues: marshall({ ':status': 'STARTED' }),
      })

      // NOTE: 組織の作成
      const organizationId = uuid()
      const organizationConfigurationId = uuid()
      await dynamoDB.putItem({
        TableName: process.env.API_NOKORIAPI_ORGANIZATIONCONFIGURATIONTABLE_NAME,
        Item     : marshall({
          __typename    : 'OrganizationConfiguration',
          id            : organizationConfigurationId,
          name          : createName,
          organizationId: organizationId,
          createdAt     : new Date().toISOString(),
          updatedAt     : new Date().toISOString(),
        })
      })
      console.info('組織の設定の作成を完了')

      await dynamoDB.putItem({
        TableName: process.env.API_NOKORIAPI_ORGANIZATIONTABLE_NAME,
        Item     : marshall({
          __typename     : 'Organization',
          id             : organizationId,
          configurationId: organizationConfigurationId,
          organizationId : organizationId,
          createdAt      : new Date().toISOString(),
          updatedAt      : new Date().toISOString(),
        })
      })
      console.info('組織の作成を完了')

      // NOTE: アカウントの作成
      const accountId = uuid()
      const accountRoleId = uuid()
      const accountConfigurationId = uuid()
      await dynamoDB.putItem({
        TableName: process.env.API_NOKORIAPI_ACCOUNTROLETABLE_NAME,
        Item     : marshall({
          __typename    : 'AccountRole',
          id            : accountRoleId,
          type          : 'MANAGER',
          accountId     : accountId,
          organizationId: organizationId,
          createdAt     : new Date().toISOString(),
          updatedAt     : new Date().toISOString(),
        })
      })
      console.info('アカウント権限の作成を完了')

      await dynamoDB.putItem({
        TableName: process.env.API_NOKORIAPI_ACCOUNTCONFIGURATIONTABLE_NAME,
        Item     : marshall({
          __typename    : 'AccountConfiguration',
          id            : accountConfigurationId,
          name          : createAccountName,
          organizationId: organizationId,
          accountId     : accountId,
          createdAt     : new Date().toISOString(),
          updatedAt     : new Date().toISOString(),
        })
      })
      console.info('アカウント設定の作成を完了')

      await dynamoDB.putItem({
        TableName: process.env.API_NOKORIAPI_ACCOUNTTABLE_NAME,
        Item     : marshall({
          __typename     : 'Account',
          id             : accountId,
          roleId         : accountRoleId,
          userId         : createUserId,
          organizationId : organizationId,
          configurationId: accountConfigurationId,
          createdAt      : new Date().toISOString(),
          updatedAt      : new Date().toISOString(),
        })
      })
      console.info('アカウントの作成を完了')

      // NOTE: ジョブの更新
      await dynamoDB.updateItem({
        TableName               : process.env.API_NOKORIAPI_ORGANIZATIONJOBTABLE_NAME,
        Key                     : marshall({ id }),
        UpdateExpression        : 'SET #status=:status, #createId=:createId, #updatedAt=:updatedAt',
        ExpressionAttributeNames: {
          '#status'   : 'status',
          '#createId' : 'createId',
          '#updatedAt': 'updatedAt'
        },
        ExpressionAttributeValues: marshall({
          ':status'   : 'FINISHED',
          ':createId' : organizationId,
          ':updatedAt': new Date().toISOString()
        }),
      })
      console.info('ジョブの更新を完了')
    } catch (error) {
      console.error(error)
      await dynamoDB.updateItem({
        TableName               : process.env.API_NOKORIAPI_ORGANIZATIONJOBTABLE_NAME,
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
