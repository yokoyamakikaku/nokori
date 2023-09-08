/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAccount = /* GraphQL */ `
  mutation CreateAccount(
    $input: CreateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    createAccount(input: $input, condition: $condition) {
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
export const updateAccount = /* GraphQL */ `
  mutation UpdateAccount(
    $input: UpdateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    updateAccount(input: $input, condition: $condition) {
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
export const deleteAccount = /* GraphQL */ `
  mutation DeleteAccount(
    $input: DeleteAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    deleteAccount(input: $input, condition: $condition) {
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
export const createAccountRole = /* GraphQL */ `
  mutation CreateAccountRole(
    $input: CreateAccountRoleInput!
    $condition: ModelAccountRoleConditionInput
  ) {
    createAccountRole(input: $input, condition: $condition) {
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
export const updateAccountRole = /* GraphQL */ `
  mutation UpdateAccountRole(
    $input: UpdateAccountRoleInput!
    $condition: ModelAccountRoleConditionInput
  ) {
    updateAccountRole(input: $input, condition: $condition) {
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
export const deleteAccountRole = /* GraphQL */ `
  mutation DeleteAccountRole(
    $input: DeleteAccountRoleInput!
    $condition: ModelAccountRoleConditionInput
  ) {
    deleteAccountRole(input: $input, condition: $condition) {
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
export const createOrganization = /* GraphQL */ `
  mutation CreateOrganization(
    $input: CreateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    createOrganization(input: $input, condition: $condition) {
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
export const updateOrganization = /* GraphQL */ `
  mutation UpdateOrganization(
    $input: UpdateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    updateOrganization(input: $input, condition: $condition) {
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
export const deleteOrganization = /* GraphQL */ `
  mutation DeleteOrganization(
    $input: DeleteOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    deleteOrganization(input: $input, condition: $condition) {
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
export const createPack = /* GraphQL */ `
  mutation CreatePack(
    $input: CreatePackInput!
    $condition: ModelPackConditionInput
  ) {
    createPack(input: $input, condition: $condition) {
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
export const updatePack = /* GraphQL */ `
  mutation UpdatePack(
    $input: UpdatePackInput!
    $condition: ModelPackConditionInput
  ) {
    updatePack(input: $input, condition: $condition) {
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
export const deletePack = /* GraphQL */ `
  mutation DeletePack(
    $input: DeletePackInput!
    $condition: ModelPackConditionInput
  ) {
    deletePack(input: $input, condition: $condition) {
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
export const createApplication = /* GraphQL */ `
  mutation CreateApplication(
    $input: CreateApplicationInput!
    $condition: ModelApplicationConditionInput
  ) {
    createApplication(input: $input, condition: $condition) {
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
export const updateApplication = /* GraphQL */ `
  mutation UpdateApplication(
    $input: UpdateApplicationInput!
    $condition: ModelApplicationConditionInput
  ) {
    updateApplication(input: $input, condition: $condition) {
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
export const deleteApplication = /* GraphQL */ `
  mutation DeleteApplication(
    $input: DeleteApplicationInput!
    $condition: ModelApplicationConditionInput
  ) {
    deleteApplication(input: $input, condition: $condition) {
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
export const createApplicationPackDetail = /* GraphQL */ `
  mutation CreateApplicationPackDetail(
    $input: CreateApplicationPackDetailInput!
    $condition: ModelApplicationPackDetailConditionInput
  ) {
    createApplicationPackDetail(input: $input, condition: $condition) {
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
export const updateApplicationPackDetail = /* GraphQL */ `
  mutation UpdateApplicationPackDetail(
    $input: UpdateApplicationPackDetailInput!
    $condition: ModelApplicationPackDetailConditionInput
  ) {
    updateApplicationPackDetail(input: $input, condition: $condition) {
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
export const deleteApplicationPackDetail = /* GraphQL */ `
  mutation DeleteApplicationPackDetail(
    $input: DeleteApplicationPackDetailInput!
    $condition: ModelApplicationPackDetailConditionInput
  ) {
    deleteApplicationPackDetail(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createOrderPackDetail = /* GraphQL */ `
  mutation CreateOrderPackDetail(
    $input: CreateOrderPackDetailInput!
    $condition: ModelOrderPackDetailConditionInput
  ) {
    createOrderPackDetail(input: $input, condition: $condition) {
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
export const updateOrderPackDetail = /* GraphQL */ `
  mutation UpdateOrderPackDetail(
    $input: UpdateOrderPackDetailInput!
    $condition: ModelOrderPackDetailConditionInput
  ) {
    updateOrderPackDetail(input: $input, condition: $condition) {
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
export const deleteOrderPackDetail = /* GraphQL */ `
  mutation DeleteOrderPackDetail(
    $input: DeleteOrderPackDetailInput!
    $condition: ModelOrderPackDetailConditionInput
  ) {
    deleteOrderPackDetail(input: $input, condition: $condition) {
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
export const createOrganizationJob = /* GraphQL */ `
  mutation CreateOrganizationJob(
    $input: CreateOrganizationJobInput!
    $condition: ModelOrganizationJobConditionInput
  ) {
    createOrganizationJob(input: $input, condition: $condition) {
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
export const updateOrganizationJob = /* GraphQL */ `
  mutation UpdateOrganizationJob(
    $input: UpdateOrganizationJobInput!
    $condition: ModelOrganizationJobConditionInput
  ) {
    updateOrganizationJob(input: $input, condition: $condition) {
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
export const deleteOrganizationJob = /* GraphQL */ `
  mutation DeleteOrganizationJob(
    $input: DeleteOrganizationJobInput!
    $condition: ModelOrganizationJobConditionInput
  ) {
    deleteOrganizationJob(input: $input, condition: $condition) {
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
