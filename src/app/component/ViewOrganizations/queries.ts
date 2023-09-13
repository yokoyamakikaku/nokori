export const listAccountsByUserId = /* GraphQL */ `
  query ListAccountsByUserId(
    $userId: String!
    $sortDirection: ModelSortDirection
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccountsByUserId(
      userId: $userId
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
      }
      nextToken
    }
  }
`
