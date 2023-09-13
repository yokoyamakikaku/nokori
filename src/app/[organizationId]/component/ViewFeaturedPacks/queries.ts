export const listPacks = /* GraphQL */ `
query ListPacks(
  $id: ID
  $createdAt: ModelStringKeyConditionInput
  $filter: ModelPackFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listPacks(
    id: $id
    createdAt: $createdAt
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      name
      type
      rhFactor
      aboSystem
      quantity
      status
      expiredAt
      createdAt
      updatedAt
    }
    nextToken
  }
}
`
