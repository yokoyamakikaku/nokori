export const listOrganizationQuery = /* GraphQL */ `
query ListAccounts(
  $filter: ModelAccountFilterInput
  $limit: Int
  $nextToken: String
) {
  listAccountsByUserId(userId: $userId, limit: $limit, nextToken: $nextToken):  {
    items {
      organization {
        id
        name
      }
    }
    nextToken
  }
}
`
