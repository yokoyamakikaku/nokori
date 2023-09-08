/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAccount = /* GraphQL */ `
  query GetAccount($id: ID!) {
    getAccount(id: $id) {
      id
      name
      userId
      organizationId
      createdAt
      organization {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      role {
        id
        role
        accountId
        organizationId
        createdAt
        updatedAt
        accountRoleOrganizationId
        accountRoleAccountId
        __typename
      }
      updatedAt
      accountRoleId
      __typename
    }
  }
`;
export const listAccounts = /* GraphQL */ `
  query ListAccounts(
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        userId
        organizationId
        createdAt
        updatedAt
        accountRoleId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAccountRole = /* GraphQL */ `
  query GetAccountRole($id: ID!) {
    getAccountRole(id: $id) {
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
      accountRoleOrganizationId
      accountRoleAccountId
      __typename
    }
  }
`;
export const listAccountRoles = /* GraphQL */ `
  query ListAccountRoles(
    $filter: ModelAccountRoleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccountRoles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        role
        accountId
        organizationId
        createdAt
        updatedAt
        accountRoleOrganizationId
        accountRoleAccountId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOrganization = /* GraphQL */ `
  query GetOrganization($id: ID!) {
    getOrganization(id: $id) {
      id
      name
      accounts {
        nextToken
        __typename
      }
      packs {
        nextToken
        __typename
      }
      applications {
        nextToken
        __typename
      }
      orders {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listOrganizations = /* GraphQL */ `
  query ListOrganizations(
    $filter: ModelOrganizationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPack = /* GraphQL */ `
  query GetPack($id: ID!) {
    getPack(id: $id) {
      id
      name
      type
      rhFactor
      aboSystem
      quantity
      status
      expiredAt
      createdAt
      organizationId
      organization {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      applicationPackDetails {
        nextToken
        __typename
      }
      orderPackDetails {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const listPacks = /* GraphQL */ `
  query ListPacks(
    $filter: ModelPackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        organizationId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getApplication = /* GraphQL */ `
  query GetApplication($id: ID!) {
    getApplication(id: $id) {
      id
      organizationId
      applicantId
      order {
        id
        status
        organizationId
        applicationId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      organization {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      applicant {
        id
        name
        userId
        organizationId
        createdAt
        updatedAt
        accountRoleId
        __typename
      }
      packDetails {
        nextToken
        __typename
      }
      updatedAt
      applicationOrderId
      __typename
    }
  }
`;
export const listApplications = /* GraphQL */ `
  query ListApplications(
    $filter: ModelApplicationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApplications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        organizationId
        applicantId
        createdAt
        updatedAt
        applicationOrderId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getApplicationPackDetail = /* GraphQL */ `
  query GetApplicationPackDetail($id: ID!) {
    getApplicationPackDetail(id: $id) {
      id
      applicationId
      organizationId
      packId
      createdAt
      organization {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      application {
        id
        organizationId
        applicantId
        createdAt
        updatedAt
        applicationOrderId
        __typename
      }
      pack {
        id
        name
        type
        rhFactor
        aboSystem
        quantity
        status
        expiredAt
        createdAt
        organizationId
        updatedAt
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const listApplicationPackDetails = /* GraphQL */ `
  query ListApplicationPackDetails(
    $filter: ModelApplicationPackDetailFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApplicationPackDetails(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        applicationId
        organizationId
        packId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      status
      organizationId
      applicationId
      createdAt
      organization {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      application {
        id
        organizationId
        applicantId
        createdAt
        updatedAt
        applicationOrderId
        __typename
      }
      orderPackDetails {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        organizationId
        applicationId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOrderPackDetail = /* GraphQL */ `
  query GetOrderPackDetail($id: ID!) {
    getOrderPackDetail(id: $id) {
      id
      orderId
      packId
      organizationId
      createdAt
      order {
        id
        status
        organizationId
        applicationId
        createdAt
        updatedAt
        __typename
      }
      pack {
        id
        name
        type
        rhFactor
        aboSystem
        quantity
        status
        expiredAt
        createdAt
        organizationId
        updatedAt
        __typename
      }
      organization {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const listOrderPackDetails = /* GraphQL */ `
  query ListOrderPackDetails(
    $filter: ModelOrderPackDetailFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderPackDetails(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderId
        packId
        organizationId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOrganizationJob = /* GraphQL */ `
  query GetOrganizationJob($id: ID!) {
    getOrganizationJob(id: $id) {
      id
      type
      status
      errorMessage
      createName
      createAccountName
      joinCode
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listOrganizationJobs = /* GraphQL */ `
  query ListOrganizationJobs(
    $filter: ModelOrganizationJobFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizationJobs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        status
        errorMessage
        createName
        createAccountName
        joinCode
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const accountsByUserId = /* GraphQL */ `
  query AccountsByUserId(
    $userId: String!
    $sortDirection: ModelSortDirection
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    accountsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        userId
        organizationId
        createdAt
        updatedAt
        accountRoleId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const accountsByOrganizationId = /* GraphQL */ `
  query AccountsByOrganizationId(
    $organizationId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    accountsByOrganizationId(
      organizationId: $organizationId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        userId
        organizationId
        createdAt
        updatedAt
        accountRoleId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const accountRolesByAccountId = /* GraphQL */ `
  query AccountRolesByAccountId(
    $accountId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAccountRoleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    accountRolesByAccountId(
      accountId: $accountId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        role
        accountId
        organizationId
        createdAt
        updatedAt
        accountRoleOrganizationId
        accountRoleAccountId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const accountRolesByOrganizationId = /* GraphQL */ `
  query AccountRolesByOrganizationId(
    $organizationId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAccountRoleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    accountRolesByOrganizationId(
      organizationId: $organizationId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        role
        accountId
        organizationId
        createdAt
        updatedAt
        accountRoleOrganizationId
        accountRoleAccountId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const packsByOrganizationIdAndCreatedAt = /* GraphQL */ `
  query PacksByOrganizationIdAndCreatedAt(
    $organizationId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    packsByOrganizationIdAndCreatedAt(
      organizationId: $organizationId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
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
        organizationId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const applicationsByOrganizationIdAndCreatedAt = /* GraphQL */ `
  query ApplicationsByOrganizationIdAndCreatedAt(
    $organizationId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelApplicationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    applicationsByOrganizationIdAndCreatedAt(
      organizationId: $organizationId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        organizationId
        applicantId
        createdAt
        updatedAt
        applicationOrderId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const applicationsByApplicantId = /* GraphQL */ `
  query ApplicationsByApplicantId(
    $applicantId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApplicationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    applicationsByApplicantId(
      applicantId: $applicantId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        organizationId
        applicantId
        createdAt
        updatedAt
        applicationOrderId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const applicationPackDetailsByApplicationId = /* GraphQL */ `
  query ApplicationPackDetailsByApplicationId(
    $applicationId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApplicationPackDetailFilterInput
    $limit: Int
    $nextToken: String
  ) {
    applicationPackDetailsByApplicationId(
      applicationId: $applicationId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        applicationId
        organizationId
        packId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const applicationPackDetailsByOrganizationIdAndCreatedAt = /* GraphQL */ `
  query ApplicationPackDetailsByOrganizationIdAndCreatedAt(
    $organizationId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelApplicationPackDetailFilterInput
    $limit: Int
    $nextToken: String
  ) {
    applicationPackDetailsByOrganizationIdAndCreatedAt(
      organizationId: $organizationId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        applicationId
        organizationId
        packId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const applicationPackDetailsByPackId = /* GraphQL */ `
  query ApplicationPackDetailsByPackId(
    $packId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApplicationPackDetailFilterInput
    $limit: Int
    $nextToken: String
  ) {
    applicationPackDetailsByPackId(
      packId: $packId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        applicationId
        organizationId
        packId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const ordersByOrganizationIdAndCreatedAt = /* GraphQL */ `
  query OrdersByOrganizationIdAndCreatedAt(
    $organizationId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByOrganizationIdAndCreatedAt(
      organizationId: $organizationId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        status
        organizationId
        applicationId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const ordersByApplicationId = /* GraphQL */ `
  query OrdersByApplicationId(
    $applicationId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByApplicationId(
      applicationId: $applicationId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        status
        organizationId
        applicationId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const orderPackDetailsByOrderId = /* GraphQL */ `
  query OrderPackDetailsByOrderId(
    $orderId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderPackDetailFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderPackDetailsByOrderId(
      orderId: $orderId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderId
        packId
        organizationId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const orderPackDetailsByPackId = /* GraphQL */ `
  query OrderPackDetailsByPackId(
    $packId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderPackDetailFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderPackDetailsByPackId(
      packId: $packId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderId
        packId
        organizationId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const orderPackDetailsByOrganizationIdAndCreatedAt = /* GraphQL */ `
  query OrderPackDetailsByOrganizationIdAndCreatedAt(
    $organizationId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOrderPackDetailFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderPackDetailsByOrganizationIdAndCreatedAt(
      organizationId: $organizationId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderId
        packId
        organizationId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
