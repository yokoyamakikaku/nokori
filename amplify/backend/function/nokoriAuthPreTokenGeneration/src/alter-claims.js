const { DynamoDB } = require('@aws-sdk/client-dynamodb')
const { marshall, unmarshall } = require('@aws-sdk/util-dynamodb')

/**
 * @type {import('@types/aws-lambda').PreTokenGenerationTriggerHandler}
 */
exports.handler = async (event) => {
  console.log({ event })
  const userId = event.userName
  if (typeof userId !== 'string') throw Error('userId does not exist')

  /** @type {string[]} */
  const organizationsAsManager = []
  /** @type {string[]} */
  const organizationsAsMember = []

  const dynamoDB = new DynamoDB()

  let ExclusiveStartKey = null
  do {
    try {
      const result = await dynamoDB.query({
        TableName               : process.env.API_NOKORIAPI_ACCOUNTTABLE_NAME,
        IndexName               : 'byUserId',
        KeyConditionExpression  : '#userId = :userId',
        ProjectionExpression    : '#id, #organizationId',
        ExpressionAttributeNames: {
          '#id'            : 'id',
          '#organizationId': 'organizationId',
          '#userId'        : 'userId',
        },
        ExpressionAttributeValues: marshall({
          ':userId': userId
        }),
        ExclusiveStartKey: ExclusiveStartKey
      })
      ExclusiveStartKey = result.LastEvaluatedKey ?? null

      for (const Item of result.Items) {
        const { id: accountId, organizationId } = unmarshall(Item)

        try {
          // NOTE: 組織の取得
          const { Item: organizationItem } = await dynamoDB.getItem({
            TableName               : process.env.API_NOKORIAPI_ORGANIZATIONTABLE_NAME,
            Key                     : marshall({ id: organizationId }),
            ProjectionExpression    : '#id',
            ExpressionAttributeNames: {
              '#id': 'id'
            }
          })
          if (!organizationItem) throw Error(`Noorganization#${organizationId}`)

          // NOTE: アカウント権限の取得
          const { Items: AccountRoleItems } = await dynamoDB.query({
              TableName               : process.env.API_NOKORIAPI_ACCOUNTROLETABLE_NAME,
              IndexName               : 'byAccountIdAndOrganizationId',
              KeyConditionExpression  : '#accountId = :accountId AND #organizationId = :organizationId',
              ProjectionExpression    : '#type',
              ExpressionAttributeNames: {
                '#type'          : 'type',
                '#accountId'     : 'accountId',
                '#organizationId': 'organizationId',
              },
              ExpressionAttributeValues: marshall({
                ':accountId'     : accountId,
                ':organizationId': organizationId,
              }),
              Limit: 1
          })
          const [AccountRoleItem]  = AccountRoleItems
          if (!AccountRoleItem) throw Error(`NoAccountRole#${accountId}_${organizationId}`)

          // NOTE: 権限の付与
          const { type } = unmarshall(AccountRoleItem)
          switch (type) {
            case 'MANAGER':
              organizationsAsManager.push(organizationId)
              break
            case 'MEMBER':
              organizationsAsMember.push(organizationId)
              break
            default:
              throw Error(`InvalidAccountRoleType=${type}`)
          }
        } catch (error) {
          console.error(error)
        }
      }
    } catch (error) {
      console.error(error)
    }
  } while (ExclusiveStartKey)

  event.response = {
    claimsOverrideDetails: {
      claimsToAddOrOverride: {
        organizations_as_manager: JSON.stringify(organizationsAsManager),
        organizations_as_member : JSON.stringify(organizationsAsMember),
      }
    }
  }

  return event
}
