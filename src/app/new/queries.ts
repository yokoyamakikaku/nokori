export const getOrganizationJob = /* GraphQL */ `
  query GetOrganizationJob($id: ID!) {
    getOrganizationJob(id: $id) {
      status
      errorMessage
      createId
    }
  }
`
