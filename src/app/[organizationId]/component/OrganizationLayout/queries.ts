export const listAccountsByUserIdAndOrganizationId = /* GraphQL */ `
  query ListAccountsByUserIdAndOrganizationId(
    $userId: String!
    $organizationId: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccountsByUserIdAndOrganizationId(
      userId: $userId
      organizationId: $organizationId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        organization {
          id
          name
        }
        role {
          id
          role
          accountId
          organizationId
          organization {
            id
            name
            createdAt
            updatedAt
            __typename
          }
          account {
            id
            name
            userId
            organizationId
            createdAt
            updatedAt
            accountRoleId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        updatedAt
        accountRoleId
        __typename
      }
      nextToken
      __typename
    }
  }
`
