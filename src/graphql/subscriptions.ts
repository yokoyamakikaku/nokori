/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAccount = /* GraphQL */ `
  subscription OnCreateAccount($filter: ModelSubscriptionAccountFilterInput) {
    onCreateAccount(filter: $filter) {
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
export const onUpdateAccount = /* GraphQL */ `
  subscription OnUpdateAccount($filter: ModelSubscriptionAccountFilterInput) {
    onUpdateAccount(filter: $filter) {
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
export const onDeleteAccount = /* GraphQL */ `
  subscription OnDeleteAccount($filter: ModelSubscriptionAccountFilterInput) {
    onDeleteAccount(filter: $filter) {
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
export const onCreateAccountRole = /* GraphQL */ `
  subscription OnCreateAccountRole(
    $filter: ModelSubscriptionAccountRoleFilterInput
  ) {
    onCreateAccountRole(filter: $filter) {
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
export const onUpdateAccountRole = /* GraphQL */ `
  subscription OnUpdateAccountRole(
    $filter: ModelSubscriptionAccountRoleFilterInput
  ) {
    onUpdateAccountRole(filter: $filter) {
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
export const onDeleteAccountRole = /* GraphQL */ `
  subscription OnDeleteAccountRole(
    $filter: ModelSubscriptionAccountRoleFilterInput
  ) {
    onDeleteAccountRole(filter: $filter) {
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
export const onCreateOrganization = /* GraphQL */ `
  subscription OnCreateOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
  ) {
    onCreateOrganization(filter: $filter) {
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
export const onUpdateOrganization = /* GraphQL */ `
  subscription OnUpdateOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
  ) {
    onUpdateOrganization(filter: $filter) {
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
export const onDeleteOrganization = /* GraphQL */ `
  subscription OnDeleteOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
  ) {
    onDeleteOrganization(filter: $filter) {
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
export const onCreatePack = /* GraphQL */ `
  subscription OnCreatePack($filter: ModelSubscriptionPackFilterInput) {
    onCreatePack(filter: $filter) {
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
export const onUpdatePack = /* GraphQL */ `
  subscription OnUpdatePack($filter: ModelSubscriptionPackFilterInput) {
    onUpdatePack(filter: $filter) {
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
export const onDeletePack = /* GraphQL */ `
  subscription OnDeletePack($filter: ModelSubscriptionPackFilterInput) {
    onDeletePack(filter: $filter) {
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
export const onCreateApplication = /* GraphQL */ `
  subscription OnCreateApplication(
    $filter: ModelSubscriptionApplicationFilterInput
  ) {
    onCreateApplication(filter: $filter) {
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
export const onUpdateApplication = /* GraphQL */ `
  subscription OnUpdateApplication(
    $filter: ModelSubscriptionApplicationFilterInput
  ) {
    onUpdateApplication(filter: $filter) {
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
export const onDeleteApplication = /* GraphQL */ `
  subscription OnDeleteApplication(
    $filter: ModelSubscriptionApplicationFilterInput
  ) {
    onDeleteApplication(filter: $filter) {
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
export const onCreateApplicationPackDetail = /* GraphQL */ `
  subscription OnCreateApplicationPackDetail(
    $filter: ModelSubscriptionApplicationPackDetailFilterInput
  ) {
    onCreateApplicationPackDetail(filter: $filter) {
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
export const onUpdateApplicationPackDetail = /* GraphQL */ `
  subscription OnUpdateApplicationPackDetail(
    $filter: ModelSubscriptionApplicationPackDetailFilterInput
  ) {
    onUpdateApplicationPackDetail(filter: $filter) {
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
export const onDeleteApplicationPackDetail = /* GraphQL */ `
  subscription OnDeleteApplicationPackDetail(
    $filter: ModelSubscriptionApplicationPackDetailFilterInput
  ) {
    onDeleteApplicationPackDetail(filter: $filter) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
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
export const onCreateOrderPackDetail = /* GraphQL */ `
  subscription OnCreateOrderPackDetail(
    $filter: ModelSubscriptionOrderPackDetailFilterInput
  ) {
    onCreateOrderPackDetail(filter: $filter) {
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
export const onUpdateOrderPackDetail = /* GraphQL */ `
  subscription OnUpdateOrderPackDetail(
    $filter: ModelSubscriptionOrderPackDetailFilterInput
  ) {
    onUpdateOrderPackDetail(filter: $filter) {
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
export const onDeleteOrderPackDetail = /* GraphQL */ `
  subscription OnDeleteOrderPackDetail(
    $filter: ModelSubscriptionOrderPackDetailFilterInput
  ) {
    onDeleteOrderPackDetail(filter: $filter) {
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
export const onCreateOrganizationJob = /* GraphQL */ `
  subscription OnCreateOrganizationJob(
    $filter: ModelSubscriptionOrganizationJobFilterInput
  ) {
    onCreateOrganizationJob(filter: $filter) {
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
export const onUpdateOrganizationJob = /* GraphQL */ `
  subscription OnUpdateOrganizationJob(
    $filter: ModelSubscriptionOrganizationJobFilterInput
  ) {
    onUpdateOrganizationJob(filter: $filter) {
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
export const onDeleteOrganizationJob = /* GraphQL */ `
  subscription OnDeleteOrganizationJob(
    $filter: ModelSubscriptionOrganizationJobFilterInput
  ) {
    onDeleteOrganizationJob(filter: $filter) {
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
