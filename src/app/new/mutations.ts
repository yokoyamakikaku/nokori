export const createOrganizationJob = /* GraphQL */ `
  mutation CreateOrganizationJob(
    $input: CreateOrganizationJobInput!
    $condition: ModelOrganizationJobConditionInput
  ) {
    createOrganizationJob(input: $input, condition: $condition) {
      id
    }
  }
`
