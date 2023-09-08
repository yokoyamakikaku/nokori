/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAccountInput = {
  id?: string | null,
  name: string,
  userId: string,
  organizationId: string,
  createdAt?: string | null,
  accountRoleId: string,
};

export type ModelAccountConditionInput = {
  name?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  organizationId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelAccountConditionInput | null > | null,
  or?: Array< ModelAccountConditionInput | null > | null,
  not?: ModelAccountConditionInput | null,
  accountRoleId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Account = {
  __typename: "Account",
  id: string,
  name: string,
  userId: string,
  organizationId: string,
  createdAt: string,
  organization?: Organization | null,
  role: AccountRole,
  updatedAt: string,
  accountRoleId: string,
};

export type Organization = {
  __typename: "Organization",
  id: string,
  name: string,
  accounts?: ModelAccountConnection | null,
  packs?: ModelPackConnection | null,
  applications?: ModelApplicationConnection | null,
  orders?: ModelOrderConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelAccountConnection = {
  __typename: "ModelAccountConnection",
  items:  Array<Account | null >,
  nextToken?: string | null,
};

export type ModelPackConnection = {
  __typename: "ModelPackConnection",
  items:  Array<Pack | null >,
  nextToken?: string | null,
};

export type Pack = {
  __typename: "Pack",
  id: string,
  name?: string | null,
  type: PackType,
  rhFactor: RhFactorType,
  aboSystem: AboSystemType,
  quantity: number,
  status: PackStatus,
  expiredAt: string,
  createdAt: string,
  organizationId: string,
  organization: Organization,
  applicationPackDetails?: ModelApplicationPackDetailConnection | null,
  orderPackDetails?: ModelOrderPackDetailConnection | null,
  updatedAt: string,
};

export enum PackType {
  FFP = "FFP",
  RBC = "RBC",
  PLT = "PLT",
}


export enum RhFactorType {
  POSITIVE = "POSITIVE",
  NEGATIVE = "NEGATIVE",
}


export enum AboSystemType {
  A = "A",
  B = "B",
  O = "O",
  AB = "AB",
}


export enum PackStatus {
  UNOPENED = "UNOPENED",
  RETURNED = "RETURNED",
  USED = "USED",
  OPENED = "OPENED",
  DISPOSED = "DISPOSED",
}


export type ModelApplicationPackDetailConnection = {
  __typename: "ModelApplicationPackDetailConnection",
  items:  Array<ApplicationPackDetail | null >,
  nextToken?: string | null,
};

export type ApplicationPackDetail = {
  __typename: "ApplicationPackDetail",
  id: string,
  applicationId: string,
  organizationId: string,
  packId: string,
  createdAt: string,
  organization: Organization,
  application: Application,
  pack: Pack,
  updatedAt: string,
};

export type Application = {
  __typename: "Application",
  id: string,
  organizationId: string,
  applicantId: string,
  order?: Order | null,
  createdAt: string,
  organization: Organization,
  applicant: Account,
  packDetails?: ModelApplicationPackDetailConnection | null,
  updatedAt: string,
  applicationOrderId?: string | null,
};

export type Order = {
  __typename: "Order",
  id: string,
  status: OrderStatus,
  organizationId: string,
  applicationId?: string | null,
  createdAt: string,
  organization: Organization,
  application?: Application | null,
  orderPackDetails?: ModelOrderPackDetailConnection | null,
  updatedAt: string,
};

export enum OrderStatus {
  CREATED = "CREATED",
  COMPLETED = "COMPLETED",
}


export type ModelOrderPackDetailConnection = {
  __typename: "ModelOrderPackDetailConnection",
  items:  Array<OrderPackDetail | null >,
  nextToken?: string | null,
};

export type OrderPackDetail = {
  __typename: "OrderPackDetail",
  id: string,
  orderId: string,
  packId: string,
  organizationId: string,
  createdAt: string,
  order?: Order | null,
  pack?: Pack | null,
  organization: Organization,
  updatedAt: string,
};

export type ModelApplicationConnection = {
  __typename: "ModelApplicationConnection",
  items:  Array<Application | null >,
  nextToken?: string | null,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items:  Array<Order | null >,
  nextToken?: string | null,
};

export type AccountRole = {
  __typename: "AccountRole",
  id: string,
  role: RoleType,
  accountId: string,
  organizationId: string,
  organization: Organization,
  account: Account,
  createdAt: string,
  updatedAt: string,
  accountRoleOrganizationId: string,
  accountRoleAccountId: string,
};

export enum RoleType {
  MEMBER = "MEMBER",
  MANAGER = "MANAGER",
}


export type UpdateAccountInput = {
  id: string,
  name?: string | null,
  userId?: string | null,
  organizationId?: string | null,
  createdAt?: string | null,
  accountRoleId?: string | null,
};

export type DeleteAccountInput = {
  id: string,
};

export type CreateAccountRoleInput = {
  id?: string | null,
  role: RoleType,
  accountId: string,
  organizationId: string,
  accountRoleOrganizationId: string,
  accountRoleAccountId: string,
};

export type ModelAccountRoleConditionInput = {
  role?: ModelRoleTypeInput | null,
  accountId?: ModelIDInput | null,
  organizationId?: ModelIDInput | null,
  and?: Array< ModelAccountRoleConditionInput | null > | null,
  or?: Array< ModelAccountRoleConditionInput | null > | null,
  not?: ModelAccountRoleConditionInput | null,
  accountRoleOrganizationId?: ModelIDInput | null,
  accountRoleAccountId?: ModelIDInput | null,
};

export type ModelRoleTypeInput = {
  eq?: RoleType | null,
  ne?: RoleType | null,
};

export type UpdateAccountRoleInput = {
  id: string,
  role?: RoleType | null,
  accountId?: string | null,
  organizationId?: string | null,
  accountRoleOrganizationId?: string | null,
  accountRoleAccountId?: string | null,
};

export type DeleteAccountRoleInput = {
  id: string,
};

export type CreateOrganizationInput = {
  id?: string | null,
  name: string,
};

export type ModelOrganizationConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelOrganizationConditionInput | null > | null,
  or?: Array< ModelOrganizationConditionInput | null > | null,
  not?: ModelOrganizationConditionInput | null,
};

export type UpdateOrganizationInput = {
  id: string,
  name?: string | null,
};

export type DeleteOrganizationInput = {
  id: string,
};

export type CreatePackInput = {
  id?: string | null,
  name?: string | null,
  type: PackType,
  rhFactor: RhFactorType,
  aboSystem: AboSystemType,
  quantity: number,
  status: PackStatus,
  expiredAt: string,
  createdAt?: string | null,
  organizationId: string,
};

export type ModelPackConditionInput = {
  name?: ModelStringInput | null,
  type?: ModelPackTypeInput | null,
  rhFactor?: ModelRhFactorTypeInput | null,
  aboSystem?: ModelAboSystemTypeInput | null,
  quantity?: ModelIntInput | null,
  status?: ModelPackStatusInput | null,
  expiredAt?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  organizationId?: ModelIDInput | null,
  and?: Array< ModelPackConditionInput | null > | null,
  or?: Array< ModelPackConditionInput | null > | null,
  not?: ModelPackConditionInput | null,
};

export type ModelPackTypeInput = {
  eq?: PackType | null,
  ne?: PackType | null,
};

export type ModelRhFactorTypeInput = {
  eq?: RhFactorType | null,
  ne?: RhFactorType | null,
};

export type ModelAboSystemTypeInput = {
  eq?: AboSystemType | null,
  ne?: AboSystemType | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelPackStatusInput = {
  eq?: PackStatus | null,
  ne?: PackStatus | null,
};

export type UpdatePackInput = {
  id: string,
  name?: string | null,
  type?: PackType | null,
  rhFactor?: RhFactorType | null,
  aboSystem?: AboSystemType | null,
  quantity?: number | null,
  status?: PackStatus | null,
  expiredAt?: string | null,
  createdAt?: string | null,
  organizationId?: string | null,
};

export type DeletePackInput = {
  id: string,
};

export type CreateApplicationInput = {
  id?: string | null,
  organizationId: string,
  applicantId: string,
  createdAt?: string | null,
  applicationOrderId?: string | null,
};

export type ModelApplicationConditionInput = {
  organizationId?: ModelIDInput | null,
  applicantId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelApplicationConditionInput | null > | null,
  or?: Array< ModelApplicationConditionInput | null > | null,
  not?: ModelApplicationConditionInput | null,
  applicationOrderId?: ModelIDInput | null,
};

export type UpdateApplicationInput = {
  id: string,
  organizationId?: string | null,
  applicantId?: string | null,
  createdAt?: string | null,
  applicationOrderId?: string | null,
};

export type DeleteApplicationInput = {
  id: string,
};

export type CreateApplicationPackDetailInput = {
  id?: string | null,
  applicationId: string,
  organizationId: string,
  packId: string,
  createdAt?: string | null,
};

export type ModelApplicationPackDetailConditionInput = {
  applicationId?: ModelIDInput | null,
  organizationId?: ModelIDInput | null,
  packId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelApplicationPackDetailConditionInput | null > | null,
  or?: Array< ModelApplicationPackDetailConditionInput | null > | null,
  not?: ModelApplicationPackDetailConditionInput | null,
};

export type UpdateApplicationPackDetailInput = {
  id: string,
  applicationId?: string | null,
  organizationId?: string | null,
  packId?: string | null,
  createdAt?: string | null,
};

export type DeleteApplicationPackDetailInput = {
  id: string,
};

export type CreateOrderInput = {
  id?: string | null,
  status: OrderStatus,
  organizationId: string,
  applicationId?: string | null,
  createdAt?: string | null,
};

export type ModelOrderConditionInput = {
  status?: ModelOrderStatusInput | null,
  organizationId?: ModelIDInput | null,
  applicationId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
};

export type ModelOrderStatusInput = {
  eq?: OrderStatus | null,
  ne?: OrderStatus | null,
};

export type UpdateOrderInput = {
  id: string,
  status?: OrderStatus | null,
  organizationId?: string | null,
  applicationId?: string | null,
  createdAt?: string | null,
};

export type DeleteOrderInput = {
  id: string,
};

export type CreateOrderPackDetailInput = {
  id?: string | null,
  orderId: string,
  packId: string,
  organizationId: string,
  createdAt?: string | null,
};

export type ModelOrderPackDetailConditionInput = {
  orderId?: ModelIDInput | null,
  packId?: ModelIDInput | null,
  organizationId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelOrderPackDetailConditionInput | null > | null,
  or?: Array< ModelOrderPackDetailConditionInput | null > | null,
  not?: ModelOrderPackDetailConditionInput | null,
};

export type UpdateOrderPackDetailInput = {
  id: string,
  orderId?: string | null,
  packId?: string | null,
  organizationId?: string | null,
  createdAt?: string | null,
};

export type DeleteOrderPackDetailInput = {
  id: string,
};

export type CreateOrganizationJobInput = {
  id?: string | null,
  type: OrganizationJobType,
  status: JobStatus,
  errorMessage?: string | null,
  createName?: string | null,
  createAccountName?: string | null,
  joinCode?: string | null,
};

export enum OrganizationJobType {
  CREATE = "CREATE",
  JOIN = "JOIN",
  DELETE = "DELETE",
}


export enum JobStatus {
  CREATED = "CREATED",
  STARTED = "STARTED",
  FINISHED = "FINISHED",
  FAILED = "FAILED",
}


export type ModelOrganizationJobConditionInput = {
  type?: ModelOrganizationJobTypeInput | null,
  status?: ModelJobStatusInput | null,
  errorMessage?: ModelStringInput | null,
  createName?: ModelStringInput | null,
  createAccountName?: ModelStringInput | null,
  joinCode?: ModelStringInput | null,
  and?: Array< ModelOrganizationJobConditionInput | null > | null,
  or?: Array< ModelOrganizationJobConditionInput | null > | null,
  not?: ModelOrganizationJobConditionInput | null,
};

export type ModelOrganizationJobTypeInput = {
  eq?: OrganizationJobType | null,
  ne?: OrganizationJobType | null,
};

export type ModelJobStatusInput = {
  eq?: JobStatus | null,
  ne?: JobStatus | null,
};

export type OrganizationJob = {
  __typename: "OrganizationJob",
  id: string,
  type: OrganizationJobType,
  status: JobStatus,
  errorMessage?: string | null,
  createName?: string | null,
  createAccountName?: string | null,
  joinCode?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateOrganizationJobInput = {
  id: string,
  type?: OrganizationJobType | null,
  status?: JobStatus | null,
  errorMessage?: string | null,
  createName?: string | null,
  createAccountName?: string | null,
  joinCode?: string | null,
};

export type DeleteOrganizationJobInput = {
  id: string,
};

export type ModelAccountFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  organizationId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelAccountFilterInput | null > | null,
  or?: Array< ModelAccountFilterInput | null > | null,
  not?: ModelAccountFilterInput | null,
  accountRoleId?: ModelIDInput | null,
};

export type ModelAccountRoleFilterInput = {
  id?: ModelIDInput | null,
  role?: ModelRoleTypeInput | null,
  accountId?: ModelIDInput | null,
  organizationId?: ModelIDInput | null,
  and?: Array< ModelAccountRoleFilterInput | null > | null,
  or?: Array< ModelAccountRoleFilterInput | null > | null,
  not?: ModelAccountRoleFilterInput | null,
  accountRoleOrganizationId?: ModelIDInput | null,
  accountRoleAccountId?: ModelIDInput | null,
};

export type ModelAccountRoleConnection = {
  __typename: "ModelAccountRoleConnection",
  items:  Array<AccountRole | null >,
  nextToken?: string | null,
};

export type ModelOrganizationFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelOrganizationFilterInput | null > | null,
  or?: Array< ModelOrganizationFilterInput | null > | null,
  not?: ModelOrganizationFilterInput | null,
};

export type ModelOrganizationConnection = {
  __typename: "ModelOrganizationConnection",
  items:  Array<Organization | null >,
  nextToken?: string | null,
};

export type ModelPackFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  type?: ModelPackTypeInput | null,
  rhFactor?: ModelRhFactorTypeInput | null,
  aboSystem?: ModelAboSystemTypeInput | null,
  quantity?: ModelIntInput | null,
  status?: ModelPackStatusInput | null,
  expiredAt?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  organizationId?: ModelIDInput | null,
  and?: Array< ModelPackFilterInput | null > | null,
  or?: Array< ModelPackFilterInput | null > | null,
  not?: ModelPackFilterInput | null,
};

export type ModelApplicationFilterInput = {
  id?: ModelIDInput | null,
  organizationId?: ModelIDInput | null,
  applicantId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelApplicationFilterInput | null > | null,
  or?: Array< ModelApplicationFilterInput | null > | null,
  not?: ModelApplicationFilterInput | null,
  applicationOrderId?: ModelIDInput | null,
};

export type ModelApplicationPackDetailFilterInput = {
  id?: ModelIDInput | null,
  applicationId?: ModelIDInput | null,
  organizationId?: ModelIDInput | null,
  packId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelApplicationPackDetailFilterInput | null > | null,
  or?: Array< ModelApplicationPackDetailFilterInput | null > | null,
  not?: ModelApplicationPackDetailFilterInput | null,
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null,
  status?: ModelOrderStatusInput | null,
  organizationId?: ModelIDInput | null,
  applicationId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
};

export type ModelOrderPackDetailFilterInput = {
  id?: ModelIDInput | null,
  orderId?: ModelIDInput | null,
  packId?: ModelIDInput | null,
  organizationId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelOrderPackDetailFilterInput | null > | null,
  or?: Array< ModelOrderPackDetailFilterInput | null > | null,
  not?: ModelOrderPackDetailFilterInput | null,
};

export type ModelOrganizationJobFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelOrganizationJobTypeInput | null,
  status?: ModelJobStatusInput | null,
  errorMessage?: ModelStringInput | null,
  createName?: ModelStringInput | null,
  createAccountName?: ModelStringInput | null,
  joinCode?: ModelStringInput | null,
  and?: Array< ModelOrganizationJobFilterInput | null > | null,
  or?: Array< ModelOrganizationJobFilterInput | null > | null,
  not?: ModelOrganizationJobFilterInput | null,
};

export type ModelOrganizationJobConnection = {
  __typename: "ModelOrganizationJobConnection",
  items:  Array<OrganizationJob | null >,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelSubscriptionAccountFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionStringInput | null,
  organizationId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAccountFilterInput | null > | null,
  or?: Array< ModelSubscriptionAccountFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionAccountRoleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  role?: ModelSubscriptionStringInput | null,
  accountId?: ModelSubscriptionIDInput | null,
  organizationId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionAccountRoleFilterInput | null > | null,
  or?: Array< ModelSubscriptionAccountRoleFilterInput | null > | null,
};

export type ModelSubscriptionOrganizationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOrganizationFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrganizationFilterInput | null > | null,
};

export type ModelSubscriptionPackFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  rhFactor?: ModelSubscriptionStringInput | null,
  aboSystem?: ModelSubscriptionStringInput | null,
  quantity?: ModelSubscriptionIntInput | null,
  status?: ModelSubscriptionStringInput | null,
  expiredAt?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  organizationId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionPackFilterInput | null > | null,
  or?: Array< ModelSubscriptionPackFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionApplicationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  organizationId?: ModelSubscriptionIDInput | null,
  applicantId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionApplicationFilterInput | null > | null,
  or?: Array< ModelSubscriptionApplicationFilterInput | null > | null,
};

export type ModelSubscriptionApplicationPackDetailFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  applicationId?: ModelSubscriptionIDInput | null,
  organizationId?: ModelSubscriptionIDInput | null,
  packId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionApplicationPackDetailFilterInput | null > | null,
  or?: Array< ModelSubscriptionApplicationPackDetailFilterInput | null > | null,
};

export type ModelSubscriptionOrderFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  organizationId?: ModelSubscriptionIDInput | null,
  applicationId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOrderFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrderFilterInput | null > | null,
};

export type ModelSubscriptionOrderPackDetailFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  orderId?: ModelSubscriptionIDInput | null,
  packId?: ModelSubscriptionIDInput | null,
  organizationId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOrderPackDetailFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrderPackDetailFilterInput | null > | null,
};

export type ModelSubscriptionOrganizationJobFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  errorMessage?: ModelSubscriptionStringInput | null,
  createName?: ModelSubscriptionStringInput | null,
  createAccountName?: ModelSubscriptionStringInput | null,
  joinCode?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOrganizationJobFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrganizationJobFilterInput | null > | null,
};

export type CreateAccountMutationVariables = {
  input: CreateAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type CreateAccountMutation = {
  createAccount?:  {
    __typename: "Account",
    id: string,
    name: string,
    userId: string,
    organizationId: string,
    createdAt: string,
    organization?:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    role:  {
      __typename: "AccountRole",
      id: string,
      role: RoleType,
      accountId: string,
      organizationId: string,
      createdAt: string,
      updatedAt: string,
      accountRoleOrganizationId: string,
      accountRoleAccountId: string,
    },
    updatedAt: string,
    accountRoleId: string,
  } | null,
};

export type UpdateAccountMutationVariables = {
  input: UpdateAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type UpdateAccountMutation = {
  updateAccount?:  {
    __typename: "Account",
    id: string,
    name: string,
    userId: string,
    organizationId: string,
    createdAt: string,
    organization?:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    role:  {
      __typename: "AccountRole",
      id: string,
      role: RoleType,
      accountId: string,
      organizationId: string,
      createdAt: string,
      updatedAt: string,
      accountRoleOrganizationId: string,
      accountRoleAccountId: string,
    },
    updatedAt: string,
    accountRoleId: string,
  } | null,
};

export type DeleteAccountMutationVariables = {
  input: DeleteAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type DeleteAccountMutation = {
  deleteAccount?:  {
    __typename: "Account",
    id: string,
    name: string,
    userId: string,
    organizationId: string,
    createdAt: string,
    organization?:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    role:  {
      __typename: "AccountRole",
      id: string,
      role: RoleType,
      accountId: string,
      organizationId: string,
      createdAt: string,
      updatedAt: string,
      accountRoleOrganizationId: string,
      accountRoleAccountId: string,
    },
    updatedAt: string,
    accountRoleId: string,
  } | null,
};

export type CreateAccountRoleMutationVariables = {
  input: CreateAccountRoleInput,
  condition?: ModelAccountRoleConditionInput | null,
};

export type CreateAccountRoleMutation = {
  createAccountRole?:  {
    __typename: "AccountRole",
    id: string,
    role: RoleType,
    accountId: string,
    organizationId: string,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    account:  {
      __typename: "Account",
      id: string,
      name: string,
      userId: string,
      organizationId: string,
      createdAt: string,
      updatedAt: string,
      accountRoleId: string,
    },
    createdAt: string,
    updatedAt: string,
    accountRoleOrganizationId: string,
    accountRoleAccountId: string,
  } | null,
};

export type UpdateAccountRoleMutationVariables = {
  input: UpdateAccountRoleInput,
  condition?: ModelAccountRoleConditionInput | null,
};

export type UpdateAccountRoleMutation = {
  updateAccountRole?:  {
    __typename: "AccountRole",
    id: string,
    role: RoleType,
    accountId: string,
    organizationId: string,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    account:  {
      __typename: "Account",
      id: string,
      name: string,
      userId: string,
      organizationId: string,
      createdAt: string,
      updatedAt: string,
      accountRoleId: string,
    },
    createdAt: string,
    updatedAt: string,
    accountRoleOrganizationId: string,
    accountRoleAccountId: string,
  } | null,
};

export type DeleteAccountRoleMutationVariables = {
  input: DeleteAccountRoleInput,
  condition?: ModelAccountRoleConditionInput | null,
};

export type DeleteAccountRoleMutation = {
  deleteAccountRole?:  {
    __typename: "AccountRole",
    id: string,
    role: RoleType,
    accountId: string,
    organizationId: string,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    account:  {
      __typename: "Account",
      id: string,
      name: string,
      userId: string,
      organizationId: string,
      createdAt: string,
      updatedAt: string,
      accountRoleId: string,
    },
    createdAt: string,
    updatedAt: string,
    accountRoleOrganizationId: string,
    accountRoleAccountId: string,
  } | null,
};

export type CreateOrganizationMutationVariables = {
  input: CreateOrganizationInput,
  condition?: ModelOrganizationConditionInput | null,
};

export type CreateOrganizationMutation = {
  createOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    accounts?:  {
      __typename: "ModelAccountConnection",
      nextToken?: string | null,
    } | null,
    packs?:  {
      __typename: "ModelPackConnection",
      nextToken?: string | null,
    } | null,
    applications?:  {
      __typename: "ModelApplicationConnection",
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOrganizationMutationVariables = {
  input: UpdateOrganizationInput,
  condition?: ModelOrganizationConditionInput | null,
};

export type UpdateOrganizationMutation = {
  updateOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    accounts?:  {
      __typename: "ModelAccountConnection",
      nextToken?: string | null,
    } | null,
    packs?:  {
      __typename: "ModelPackConnection",
      nextToken?: string | null,
    } | null,
    applications?:  {
      __typename: "ModelApplicationConnection",
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOrganizationMutationVariables = {
  input: DeleteOrganizationInput,
  condition?: ModelOrganizationConditionInput | null,
};

export type DeleteOrganizationMutation = {
  deleteOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    accounts?:  {
      __typename: "ModelAccountConnection",
      nextToken?: string | null,
    } | null,
    packs?:  {
      __typename: "ModelPackConnection",
      nextToken?: string | null,
    } | null,
    applications?:  {
      __typename: "ModelApplicationConnection",
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePackMutationVariables = {
  input: CreatePackInput,
  condition?: ModelPackConditionInput | null,
};

export type CreatePackMutation = {
  createPack?:  {
    __typename: "Pack",
    id: string,
    name?: string | null,
    type: PackType,
    rhFactor: RhFactorType,
    aboSystem: AboSystemType,
    quantity: number,
    status: PackStatus,
    expiredAt: string,
    createdAt: string,
    organizationId: string,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    applicationPackDetails?:  {
      __typename: "ModelApplicationPackDetailConnection",
      nextToken?: string | null,
    } | null,
    orderPackDetails?:  {
      __typename: "ModelOrderPackDetailConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdatePackMutationVariables = {
  input: UpdatePackInput,
  condition?: ModelPackConditionInput | null,
};

export type UpdatePackMutation = {
  updatePack?:  {
    __typename: "Pack",
    id: string,
    name?: string | null,
    type: PackType,
    rhFactor: RhFactorType,
    aboSystem: AboSystemType,
    quantity: number,
    status: PackStatus,
    expiredAt: string,
    createdAt: string,
    organizationId: string,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    applicationPackDetails?:  {
      __typename: "ModelApplicationPackDetailConnection",
      nextToken?: string | null,
    } | null,
    orderPackDetails?:  {
      __typename: "ModelOrderPackDetailConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeletePackMutationVariables = {
  input: DeletePackInput,
  condition?: ModelPackConditionInput | null,
};

export type DeletePackMutation = {
  deletePack?:  {
    __typename: "Pack",
    id: string,
    name?: string | null,
    type: PackType,
    rhFactor: RhFactorType,
    aboSystem: AboSystemType,
    quantity: number,
    status: PackStatus,
    expiredAt: string,
    createdAt: string,
    organizationId: string,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    applicationPackDetails?:  {
      __typename: "ModelApplicationPackDetailConnection",
      nextToken?: string | null,
    } | null,
    orderPackDetails?:  {
      __typename: "ModelOrderPackDetailConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateApplicationMutationVariables = {
  input: CreateApplicationInput,
  condition?: ModelApplicationConditionInput | null,
};

export type CreateApplicationMutation = {
  createApplication?:  {
    __typename: "Application",
    id: string,
    organizationId: string,
    applicantId: string,
    order?:  {
      __typename: "Order",
      id: string,
      status: OrderStatus,
      organizationId: string,
      applicationId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    applicant:  {
      __typename: "Account",
      id: string,
      name: string,
      userId: string,
      organizationId: string,
      createdAt: string,
      updatedAt: string,
      accountRoleId: string,
    },
    packDetails?:  {
      __typename: "ModelApplicationPackDetailConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    applicationOrderId?: string | null,
  } | null,
};

export type UpdateApplicationMutationVariables = {
  input: UpdateApplicationInput,
  condition?: ModelApplicationConditionInput | null,
};

export type UpdateApplicationMutation = {
  updateApplication?:  {
    __typename: "Application",
    id: string,
    organizationId: string,
    applicantId: string,
    order?:  {
      __typename: "Order",
      id: string,
      status: OrderStatus,
      organizationId: string,
      applicationId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    applicant:  {
      __typename: "Account",
      id: string,
      name: string,
      userId: string,
      organizationId: string,
      createdAt: string,
      updatedAt: string,
      accountRoleId: string,
    },
    packDetails?:  {
      __typename: "ModelApplicationPackDetailConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    applicationOrderId?: string | null,
  } | null,
};

export type DeleteApplicationMutationVariables = {
  input: DeleteApplicationInput,
  condition?: ModelApplicationConditionInput | null,
};

export type DeleteApplicationMutation = {
  deleteApplication?:  {
    __typename: "Application",
    id: string,
    organizationId: string,
    applicantId: string,
    order?:  {
      __typename: "Order",
      id: string,
      status: OrderStatus,
      organizationId: string,
      applicationId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    applicant:  {
      __typename: "Account",
      id: string,
      name: string,
      userId: string,
      organizationId: string,
      createdAt: string,
      updatedAt: string,
      accountRoleId: string,
    },
    packDetails?:  {
      __typename: "ModelApplicationPackDetailConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    applicationOrderId?: string | null,
  } | null,
};

export type CreateApplicationPackDetailMutationVariables = {
  input: CreateApplicationPackDetailInput,
  condition?: ModelApplicationPackDetailConditionInput | null,
};

export type CreateApplicationPackDetailMutation = {
  createApplicationPackDetail?:  {
    __typename: "ApplicationPackDetail",
    id: string,
    applicationId: string,
    organizationId: string,
    packId: string,
    createdAt: string,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    application:  {
      __typename: "Application",
      id: string,
      organizationId: string,
      applicantId: string,
      createdAt: string,
      updatedAt: string,
      applicationOrderId?: string | null,
    },
    pack:  {
      __typename: "Pack",
      id: string,
      name?: string | null,
      type: PackType,
      rhFactor: RhFactorType,
      aboSystem: AboSystemType,
      quantity: number,
      status: PackStatus,
      expiredAt: string,
      createdAt: string,
      organizationId: string,
      updatedAt: string,
    },
    updatedAt: string,
  } | null,
};

export type UpdateApplicationPackDetailMutationVariables = {
  input: UpdateApplicationPackDetailInput,
  condition?: ModelApplicationPackDetailConditionInput | null,
};

export type UpdateApplicationPackDetailMutation = {
  updateApplicationPackDetail?:  {
    __typename: "ApplicationPackDetail",
    id: string,
    applicationId: string,
    organizationId: string,
    packId: string,
    createdAt: string,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    application:  {
      __typename: "Application",
      id: string,
      organizationId: string,
      applicantId: string,
      createdAt: string,
      updatedAt: string,
      applicationOrderId?: string | null,
    },
    pack:  {
      __typename: "Pack",
      id: string,
      name?: string | null,
      type: PackType,
      rhFactor: RhFactorType,
      aboSystem: AboSystemType,
      quantity: number,
      status: PackStatus,
      expiredAt: string,
      createdAt: string,
      organizationId: string,
      updatedAt: string,
    },
    updatedAt: string,
  } | null,
};

export type DeleteApplicationPackDetailMutationVariables = {
  input: DeleteApplicationPackDetailInput,
  condition?: ModelApplicationPackDetailConditionInput | null,
};

export type DeleteApplicationPackDetailMutation = {
  deleteApplicationPackDetail?:  {
    __typename: "ApplicationPackDetail",
    id: string,
    applicationId: string,
    organizationId: string,
    packId: string,
    createdAt: string,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    application:  {
      __typename: "Application",
      id: string,
      organizationId: string,
      applicantId: string,
      createdAt: string,
      updatedAt: string,
      applicationOrderId?: string | null,
    },
    pack:  {
      __typename: "Pack",
      id: string,
      name?: string | null,
      type: PackType,
      rhFactor: RhFactorType,
      aboSystem: AboSystemType,
      quantity: number,
      status: PackStatus,
      expiredAt: string,
      createdAt: string,
      organizationId: string,
      updatedAt: string,
    },
    updatedAt: string,
  } | null,
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    id: string,
    status: OrderStatus,
    organizationId: string,
    applicationId?: string | null,
    createdAt: string,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    application?:  {
      __typename: "Application",
      id: string,
      organizationId: string,
      applicantId: string,
      createdAt: string,
      updatedAt: string,
      applicationOrderId?: string | null,
    } | null,
    orderPackDetails?:  {
      __typename: "ModelOrderPackDetailConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    id: string,
    status: OrderStatus,
    organizationId: string,
    applicationId?: string | null,
    createdAt: string,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    application?:  {
      __typename: "Application",
      id: string,
      organizationId: string,
      applicantId: string,
      createdAt: string,
      updatedAt: string,
      applicationOrderId?: string | null,
    } | null,
    orderPackDetails?:  {
      __typename: "ModelOrderPackDetailConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    id: string,
    status: OrderStatus,
    organizationId: string,
    applicationId?: string | null,
    createdAt: string,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    application?:  {
      __typename: "Application",
      id: string,
      organizationId: string,
      applicantId: string,
      createdAt: string,
      updatedAt: string,
      applicationOrderId?: string | null,
    } | null,
    orderPackDetails?:  {
      __typename: "ModelOrderPackDetailConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateOrderPackDetailMutationVariables = {
  input: CreateOrderPackDetailInput,
  condition?: ModelOrderPackDetailConditionInput | null,
};

export type CreateOrderPackDetailMutation = {
  createOrderPackDetail?:  {
    __typename: "OrderPackDetail",
    id: string,
    orderId: string,
    packId: string,
    organizationId: string,
    createdAt: string,
    order?:  {
      __typename: "Order",
      id: string,
      status: OrderStatus,
      organizationId: string,
      applicationId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    pack?:  {
      __typename: "Pack",
      id: string,
      name?: string | null,
      type: PackType,
      rhFactor: RhFactorType,
      aboSystem: AboSystemType,
      quantity: number,
      status: PackStatus,
      expiredAt: string,
      createdAt: string,
      organizationId: string,
      updatedAt: string,
    } | null,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    updatedAt: string,
  } | null,
};

export type UpdateOrderPackDetailMutationVariables = {
  input: UpdateOrderPackDetailInput,
  condition?: ModelOrderPackDetailConditionInput | null,
};

export type UpdateOrderPackDetailMutation = {
  updateOrderPackDetail?:  {
    __typename: "OrderPackDetail",
    id: string,
    orderId: string,
    packId: string,
    organizationId: string,
    createdAt: string,
    order?:  {
      __typename: "Order",
      id: string,
      status: OrderStatus,
      organizationId: string,
      applicationId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    pack?:  {
      __typename: "Pack",
      id: string,
      name?: string | null,
      type: PackType,
      rhFactor: RhFactorType,
      aboSystem: AboSystemType,
      quantity: number,
      status: PackStatus,
      expiredAt: string,
      createdAt: string,
      organizationId: string,
      updatedAt: string,
    } | null,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    updatedAt: string,
  } | null,
};

export type DeleteOrderPackDetailMutationVariables = {
  input: DeleteOrderPackDetailInput,
  condition?: ModelOrderPackDetailConditionInput | null,
};

export type DeleteOrderPackDetailMutation = {
  deleteOrderPackDetail?:  {
    __typename: "OrderPackDetail",
    id: string,
    orderId: string,
    packId: string,
    organizationId: string,
    createdAt: string,
    order?:  {
      __typename: "Order",
      id: string,
      status: OrderStatus,
      organizationId: string,
      applicationId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    pack?:  {
      __typename: "Pack",
      id: string,
      name?: string | null,
      type: PackType,
      rhFactor: RhFactorType,
      aboSystem: AboSystemType,
      quantity: number,
      status: PackStatus,
      expiredAt: string,
      createdAt: string,
      organizationId: string,
      updatedAt: string,
    } | null,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    updatedAt: string,
  } | null,
};

export type CreateOrganizationJobMutationVariables = {
  input: CreateOrganizationJobInput,
  condition?: ModelOrganizationJobConditionInput | null,
};

export type CreateOrganizationJobMutation = {
  createOrganizationJob?:  {
    __typename: "OrganizationJob",
    id: string,
    type: OrganizationJobType,
    status: JobStatus,
    errorMessage?: string | null,
    createName?: string | null,
    createAccountName?: string | null,
    joinCode?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateOrganizationJobMutationVariables = {
  input: UpdateOrganizationJobInput,
  condition?: ModelOrganizationJobConditionInput | null,
};

export type UpdateOrganizationJobMutation = {
  updateOrganizationJob?:  {
    __typename: "OrganizationJob",
    id: string,
    type: OrganizationJobType,
    status: JobStatus,
    errorMessage?: string | null,
    createName?: string | null,
    createAccountName?: string | null,
    joinCode?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteOrganizationJobMutationVariables = {
  input: DeleteOrganizationJobInput,
  condition?: ModelOrganizationJobConditionInput | null,
};

export type DeleteOrganizationJobMutation = {
  deleteOrganizationJob?:  {
    __typename: "OrganizationJob",
    id: string,
    type: OrganizationJobType,
    status: JobStatus,
    errorMessage?: string | null,
    createName?: string | null,
    createAccountName?: string | null,
    joinCode?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetAccountQueryVariables = {
  id: string,
};

export type GetAccountQuery = {
  getAccount?:  {
    __typename: "Account",
    id: string,
    name: string,
    userId: string,
    organizationId: string,
    createdAt: string,
    organization?:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    role:  {
      __typename: "AccountRole",
      id: string,
      role: RoleType,
      accountId: string,
      organizationId: string,
      createdAt: string,
      updatedAt: string,
      accountRoleOrganizationId: string,
      accountRoleAccountId: string,
    },
    updatedAt: string,
    accountRoleId: string,
  } | null,
};

export type ListAccountsQueryVariables = {
  filter?: ModelAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAccountsQuery = {
  listAccounts?:  {
    __typename: "ModelAccountConnection",
    items:  Array< {
      __typename: "Account",
      id: string,
      name: string,
      userId: string,
      organizationId: string,
      createdAt: string,
      updatedAt: string,
      accountRoleId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAccountRoleQueryVariables = {
  id: string,
};

export type GetAccountRoleQuery = {
  getAccountRole?:  {
    __typename: "AccountRole",
    id: string,
    role: RoleType,
    accountId: string,
    organizationId: string,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    account:  {
      __typename: "Account",
      id: string,
      name: string,
      userId: string,
      organizationId: string,
      createdAt: string,
      updatedAt: string,
      accountRoleId: string,
    },
    createdAt: string,
    updatedAt: string,
    accountRoleOrganizationId: string,
    accountRoleAccountId: string,
  } | null,
};

export type ListAccountRolesQueryVariables = {
  filter?: ModelAccountRoleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAccountRolesQuery = {
  listAccountRoles?:  {
    __typename: "ModelAccountRoleConnection",
    items:  Array< {
      __typename: "AccountRole",
      id: string,
      role: RoleType,
      accountId: string,
      organizationId: string,
      createdAt: string,
      updatedAt: string,
      accountRoleOrganizationId: string,
      accountRoleAccountId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOrganizationQueryVariables = {
  id: string,
};

export type GetOrganizationQuery = {
  getOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    accounts?:  {
      __typename: "ModelAccountConnection",
      nextToken?: string | null,
    } | null,
    packs?:  {
      __typename: "ModelPackConnection",
      nextToken?: string | null,
    } | null,
    applications?:  {
      __typename: "ModelApplicationConnection",
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOrganizationsQueryVariables = {
  filter?: ModelOrganizationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrganizationsQuery = {
  listOrganizations?:  {
    __typename: "ModelOrganizationConnection",
    items:  Array< {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPackQueryVariables = {
  id: string,
};

export type GetPackQuery = {
  getPack?:  {
    __typename: "Pack",
    id: string,
    name?: string | null,
    type: PackType,
    rhFactor: RhFactorType,
    aboSystem: AboSystemType,
    quantity: number,
    status: PackStatus,
    expiredAt: string,
    createdAt: string,
    organizationId: string,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    applicationPackDetails?:  {
      __typename: "ModelApplicationPackDetailConnection",
      nextToken?: string | null,
    } | null,
    orderPackDetails?:  {
      __typename: "ModelOrderPackDetailConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type ListPacksQueryVariables = {
  filter?: ModelPackFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPacksQuery = {
  listPacks?:  {
    __typename: "ModelPackConnection",
    items:  Array< {
      __typename: "Pack",
      id: string,
      name?: string | null,
      type: PackType,
      rhFactor: RhFactorType,
      aboSystem: AboSystemType,
      quantity: number,
      status: PackStatus,
      expiredAt: string,
      createdAt: string,
      organizationId: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetApplicationQueryVariables = {
  id: string,
};

export type GetApplicationQuery = {
  getApplication?:  {
    __typename: "Application",
    id: string,
    organizationId: string,
    applicantId: string,
    order?:  {
      __typename: "Order",
      id: string,
      status: OrderStatus,
      organizationId: string,
      applicationId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    applicant:  {
      __typename: "Account",
      id: string,
      name: string,
      userId: string,
      organizationId: string,
      createdAt: string,
      updatedAt: string,
      accountRoleId: string,
    },
    packDetails?:  {
      __typename: "ModelApplicationPackDetailConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    applicationOrderId?: string | null,
  } | null,
};

export type ListApplicationsQueryVariables = {
  filter?: ModelApplicationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListApplicationsQuery = {
  listApplications?:  {
    __typename: "ModelApplicationConnection",
    items:  Array< {
      __typename: "Application",
      id: string,
      organizationId: string,
      applicantId: string,
      createdAt: string,
      updatedAt: string,
      applicationOrderId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetApplicationPackDetailQueryVariables = {
  id: string,
};

export type GetApplicationPackDetailQuery = {
  getApplicationPackDetail?:  {
    __typename: "ApplicationPackDetail",
    id: string,
    applicationId: string,
    organizationId: string,
    packId: string,
    createdAt: string,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    application:  {
      __typename: "Application",
      id: string,
      organizationId: string,
      applicantId: string,
      createdAt: string,
      updatedAt: string,
      applicationOrderId?: string | null,
    },
    pack:  {
      __typename: "Pack",
      id: string,
      name?: string | null,
      type: PackType,
      rhFactor: RhFactorType,
      aboSystem: AboSystemType,
      quantity: number,
      status: PackStatus,
      expiredAt: string,
      createdAt: string,
      organizationId: string,
      updatedAt: string,
    },
    updatedAt: string,
  } | null,
};

export type ListApplicationPackDetailsQueryVariables = {
  filter?: ModelApplicationPackDetailFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListApplicationPackDetailsQuery = {
  listApplicationPackDetails?:  {
    __typename: "ModelApplicationPackDetailConnection",
    items:  Array< {
      __typename: "ApplicationPackDetail",
      id: string,
      applicationId: string,
      organizationId: string,
      packId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    id: string,
    status: OrderStatus,
    organizationId: string,
    applicationId?: string | null,
    createdAt: string,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    application?:  {
      __typename: "Application",
      id: string,
      organizationId: string,
      applicantId: string,
      createdAt: string,
      updatedAt: string,
      applicationOrderId?: string | null,
    } | null,
    orderPackDetails?:  {
      __typename: "ModelOrderPackDetailConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      status: OrderStatus,
      organizationId: string,
      applicationId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOrderPackDetailQueryVariables = {
  id: string,
};

export type GetOrderPackDetailQuery = {
  getOrderPackDetail?:  {
    __typename: "OrderPackDetail",
    id: string,
    orderId: string,
    packId: string,
    organizationId: string,
    createdAt: string,
    order?:  {
      __typename: "Order",
      id: string,
      status: OrderStatus,
      organizationId: string,
      applicationId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    pack?:  {
      __typename: "Pack",
      id: string,
      name?: string | null,
      type: PackType,
      rhFactor: RhFactorType,
      aboSystem: AboSystemType,
      quantity: number,
      status: PackStatus,
      expiredAt: string,
      createdAt: string,
      organizationId: string,
      updatedAt: string,
    } | null,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    updatedAt: string,
  } | null,
};

export type ListOrderPackDetailsQueryVariables = {
  filter?: ModelOrderPackDetailFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrderPackDetailsQuery = {
  listOrderPackDetails?:  {
    __typename: "ModelOrderPackDetailConnection",
    items:  Array< {
      __typename: "OrderPackDetail",
      id: string,
      orderId: string,
      packId: string,
      organizationId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOrganizationJobQueryVariables = {
  id: string,
};

export type GetOrganizationJobQuery = {
  getOrganizationJob?:  {
    __typename: "OrganizationJob",
    id: string,
    type: OrganizationJobType,
    status: JobStatus,
    errorMessage?: string | null,
    createName?: string | null,
    createAccountName?: string | null,
    joinCode?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListOrganizationJobsQueryVariables = {
  filter?: ModelOrganizationJobFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrganizationJobsQuery = {
  listOrganizationJobs?:  {
    __typename: "ModelOrganizationJobConnection",
    items:  Array< {
      __typename: "OrganizationJob",
      id: string,
      type: OrganizationJobType,
      status: JobStatus,
      errorMessage?: string | null,
      createName?: string | null,
      createAccountName?: string | null,
      joinCode?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AccountsByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AccountsByUserIdQuery = {
  accountsByUserId?:  {
    __typename: "ModelAccountConnection",
    items:  Array< {
      __typename: "Account",
      id: string,
      name: string,
      userId: string,
      organizationId: string,
      createdAt: string,
      updatedAt: string,
      accountRoleId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AccountsByOrganizationIdQueryVariables = {
  organizationId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AccountsByOrganizationIdQuery = {
  accountsByOrganizationId?:  {
    __typename: "ModelAccountConnection",
    items:  Array< {
      __typename: "Account",
      id: string,
      name: string,
      userId: string,
      organizationId: string,
      createdAt: string,
      updatedAt: string,
      accountRoleId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AccountRolesByAccountIdQueryVariables = {
  accountId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAccountRoleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AccountRolesByAccountIdQuery = {
  accountRolesByAccountId?:  {
    __typename: "ModelAccountRoleConnection",
    items:  Array< {
      __typename: "AccountRole",
      id: string,
      role: RoleType,
      accountId: string,
      organizationId: string,
      createdAt: string,
      updatedAt: string,
      accountRoleOrganizationId: string,
      accountRoleAccountId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AccountRolesByOrganizationIdQueryVariables = {
  organizationId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAccountRoleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AccountRolesByOrganizationIdQuery = {
  accountRolesByOrganizationId?:  {
    __typename: "ModelAccountRoleConnection",
    items:  Array< {
      __typename: "AccountRole",
      id: string,
      role: RoleType,
      accountId: string,
      organizationId: string,
      createdAt: string,
      updatedAt: string,
      accountRoleOrganizationId: string,
      accountRoleAccountId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PacksByOrganizationIdAndCreatedAtQueryVariables = {
  organizationId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPackFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PacksByOrganizationIdAndCreatedAtQuery = {
  packsByOrganizationIdAndCreatedAt?:  {
    __typename: "ModelPackConnection",
    items:  Array< {
      __typename: "Pack",
      id: string,
      name?: string | null,
      type: PackType,
      rhFactor: RhFactorType,
      aboSystem: AboSystemType,
      quantity: number,
      status: PackStatus,
      expiredAt: string,
      createdAt: string,
      organizationId: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ApplicationsByOrganizationIdAndCreatedAtQueryVariables = {
  organizationId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelApplicationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ApplicationsByOrganizationIdAndCreatedAtQuery = {
  applicationsByOrganizationIdAndCreatedAt?:  {
    __typename: "ModelApplicationConnection",
    items:  Array< {
      __typename: "Application",
      id: string,
      organizationId: string,
      applicantId: string,
      createdAt: string,
      updatedAt: string,
      applicationOrderId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ApplicationsByApplicantIdQueryVariables = {
  applicantId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelApplicationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ApplicationsByApplicantIdQuery = {
  applicationsByApplicantId?:  {
    __typename: "ModelApplicationConnection",
    items:  Array< {
      __typename: "Application",
      id: string,
      organizationId: string,
      applicantId: string,
      createdAt: string,
      updatedAt: string,
      applicationOrderId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ApplicationPackDetailsByApplicationIdQueryVariables = {
  applicationId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelApplicationPackDetailFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ApplicationPackDetailsByApplicationIdQuery = {
  applicationPackDetailsByApplicationId?:  {
    __typename: "ModelApplicationPackDetailConnection",
    items:  Array< {
      __typename: "ApplicationPackDetail",
      id: string,
      applicationId: string,
      organizationId: string,
      packId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ApplicationPackDetailsByOrganizationIdAndCreatedAtQueryVariables = {
  organizationId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelApplicationPackDetailFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ApplicationPackDetailsByOrganizationIdAndCreatedAtQuery = {
  applicationPackDetailsByOrganizationIdAndCreatedAt?:  {
    __typename: "ModelApplicationPackDetailConnection",
    items:  Array< {
      __typename: "ApplicationPackDetail",
      id: string,
      applicationId: string,
      organizationId: string,
      packId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ApplicationPackDetailsByPackIdQueryVariables = {
  packId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelApplicationPackDetailFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ApplicationPackDetailsByPackIdQuery = {
  applicationPackDetailsByPackId?:  {
    __typename: "ModelApplicationPackDetailConnection",
    items:  Array< {
      __typename: "ApplicationPackDetail",
      id: string,
      applicationId: string,
      organizationId: string,
      packId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OrdersByOrganizationIdAndCreatedAtQueryVariables = {
  organizationId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OrdersByOrganizationIdAndCreatedAtQuery = {
  ordersByOrganizationIdAndCreatedAt?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      status: OrderStatus,
      organizationId: string,
      applicationId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OrdersByApplicationIdQueryVariables = {
  applicationId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OrdersByApplicationIdQuery = {
  ordersByApplicationId?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      status: OrderStatus,
      organizationId: string,
      applicationId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OrderPackDetailsByOrderIdQueryVariables = {
  orderId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderPackDetailFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OrderPackDetailsByOrderIdQuery = {
  orderPackDetailsByOrderId?:  {
    __typename: "ModelOrderPackDetailConnection",
    items:  Array< {
      __typename: "OrderPackDetail",
      id: string,
      orderId: string,
      packId: string,
      organizationId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OrderPackDetailsByPackIdQueryVariables = {
  packId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderPackDetailFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OrderPackDetailsByPackIdQuery = {
  orderPackDetailsByPackId?:  {
    __typename: "ModelOrderPackDetailConnection",
    items:  Array< {
      __typename: "OrderPackDetail",
      id: string,
      orderId: string,
      packId: string,
      organizationId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OrderPackDetailsByOrganizationIdAndCreatedAtQueryVariables = {
  organizationId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderPackDetailFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OrderPackDetailsByOrganizationIdAndCreatedAtQuery = {
  orderPackDetailsByOrganizationIdAndCreatedAt?:  {
    __typename: "ModelOrderPackDetailConnection",
    items:  Array< {
      __typename: "OrderPackDetail",
      id: string,
      orderId: string,
      packId: string,
      organizationId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateAccountSubscriptionVariables = {
  filter?: ModelSubscriptionAccountFilterInput | null,
};

export type OnCreateAccountSubscription = {
  onCreateAccount?:  {
    __typename: "Account",
    id: string,
    name: string,
    userId: string,
    organizationId: string,
    createdAt: string,
    organization?:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    role:  {
      __typename: "AccountRole",
      id: string,
      role: RoleType,
      accountId: string,
      organizationId: string,
      createdAt: string,
      updatedAt: string,
      accountRoleOrganizationId: string,
      accountRoleAccountId: string,
    },
    updatedAt: string,
    accountRoleId: string,
  } | null,
};

export type OnUpdateAccountSubscriptionVariables = {
  filter?: ModelSubscriptionAccountFilterInput | null,
};

export type OnUpdateAccountSubscription = {
  onUpdateAccount?:  {
    __typename: "Account",
    id: string,
    name: string,
    userId: string,
    organizationId: string,
    createdAt: string,
    organization?:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    role:  {
      __typename: "AccountRole",
      id: string,
      role: RoleType,
      accountId: string,
      organizationId: string,
      createdAt: string,
      updatedAt: string,
      accountRoleOrganizationId: string,
      accountRoleAccountId: string,
    },
    updatedAt: string,
    accountRoleId: string,
  } | null,
};

export type OnDeleteAccountSubscriptionVariables = {
  filter?: ModelSubscriptionAccountFilterInput | null,
};

export type OnDeleteAccountSubscription = {
  onDeleteAccount?:  {
    __typename: "Account",
    id: string,
    name: string,
    userId: string,
    organizationId: string,
    createdAt: string,
    organization?:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    role:  {
      __typename: "AccountRole",
      id: string,
      role: RoleType,
      accountId: string,
      organizationId: string,
      createdAt: string,
      updatedAt: string,
      accountRoleOrganizationId: string,
      accountRoleAccountId: string,
    },
    updatedAt: string,
    accountRoleId: string,
  } | null,
};

export type OnCreateAccountRoleSubscriptionVariables = {
  filter?: ModelSubscriptionAccountRoleFilterInput | null,
};

export type OnCreateAccountRoleSubscription = {
  onCreateAccountRole?:  {
    __typename: "AccountRole",
    id: string,
    role: RoleType,
    accountId: string,
    organizationId: string,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    account:  {
      __typename: "Account",
      id: string,
      name: string,
      userId: string,
      organizationId: string,
      createdAt: string,
      updatedAt: string,
      accountRoleId: string,
    },
    createdAt: string,
    updatedAt: string,
    accountRoleOrganizationId: string,
    accountRoleAccountId: string,
  } | null,
};

export type OnUpdateAccountRoleSubscriptionVariables = {
  filter?: ModelSubscriptionAccountRoleFilterInput | null,
};

export type OnUpdateAccountRoleSubscription = {
  onUpdateAccountRole?:  {
    __typename: "AccountRole",
    id: string,
    role: RoleType,
    accountId: string,
    organizationId: string,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    account:  {
      __typename: "Account",
      id: string,
      name: string,
      userId: string,
      organizationId: string,
      createdAt: string,
      updatedAt: string,
      accountRoleId: string,
    },
    createdAt: string,
    updatedAt: string,
    accountRoleOrganizationId: string,
    accountRoleAccountId: string,
  } | null,
};

export type OnDeleteAccountRoleSubscriptionVariables = {
  filter?: ModelSubscriptionAccountRoleFilterInput | null,
};

export type OnDeleteAccountRoleSubscription = {
  onDeleteAccountRole?:  {
    __typename: "AccountRole",
    id: string,
    role: RoleType,
    accountId: string,
    organizationId: string,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    account:  {
      __typename: "Account",
      id: string,
      name: string,
      userId: string,
      organizationId: string,
      createdAt: string,
      updatedAt: string,
      accountRoleId: string,
    },
    createdAt: string,
    updatedAt: string,
    accountRoleOrganizationId: string,
    accountRoleAccountId: string,
  } | null,
};

export type OnCreateOrganizationSubscriptionVariables = {
  filter?: ModelSubscriptionOrganizationFilterInput | null,
};

export type OnCreateOrganizationSubscription = {
  onCreateOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    accounts?:  {
      __typename: "ModelAccountConnection",
      nextToken?: string | null,
    } | null,
    packs?:  {
      __typename: "ModelPackConnection",
      nextToken?: string | null,
    } | null,
    applications?:  {
      __typename: "ModelApplicationConnection",
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOrganizationSubscriptionVariables = {
  filter?: ModelSubscriptionOrganizationFilterInput | null,
};

export type OnUpdateOrganizationSubscription = {
  onUpdateOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    accounts?:  {
      __typename: "ModelAccountConnection",
      nextToken?: string | null,
    } | null,
    packs?:  {
      __typename: "ModelPackConnection",
      nextToken?: string | null,
    } | null,
    applications?:  {
      __typename: "ModelApplicationConnection",
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOrganizationSubscriptionVariables = {
  filter?: ModelSubscriptionOrganizationFilterInput | null,
};

export type OnDeleteOrganizationSubscription = {
  onDeleteOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    accounts?:  {
      __typename: "ModelAccountConnection",
      nextToken?: string | null,
    } | null,
    packs?:  {
      __typename: "ModelPackConnection",
      nextToken?: string | null,
    } | null,
    applications?:  {
      __typename: "ModelApplicationConnection",
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePackSubscriptionVariables = {
  filter?: ModelSubscriptionPackFilterInput | null,
};

export type OnCreatePackSubscription = {
  onCreatePack?:  {
    __typename: "Pack",
    id: string,
    name?: string | null,
    type: PackType,
    rhFactor: RhFactorType,
    aboSystem: AboSystemType,
    quantity: number,
    status: PackStatus,
    expiredAt: string,
    createdAt: string,
    organizationId: string,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    applicationPackDetails?:  {
      __typename: "ModelApplicationPackDetailConnection",
      nextToken?: string | null,
    } | null,
    orderPackDetails?:  {
      __typename: "ModelOrderPackDetailConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdatePackSubscriptionVariables = {
  filter?: ModelSubscriptionPackFilterInput | null,
};

export type OnUpdatePackSubscription = {
  onUpdatePack?:  {
    __typename: "Pack",
    id: string,
    name?: string | null,
    type: PackType,
    rhFactor: RhFactorType,
    aboSystem: AboSystemType,
    quantity: number,
    status: PackStatus,
    expiredAt: string,
    createdAt: string,
    organizationId: string,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    applicationPackDetails?:  {
      __typename: "ModelApplicationPackDetailConnection",
      nextToken?: string | null,
    } | null,
    orderPackDetails?:  {
      __typename: "ModelOrderPackDetailConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeletePackSubscriptionVariables = {
  filter?: ModelSubscriptionPackFilterInput | null,
};

export type OnDeletePackSubscription = {
  onDeletePack?:  {
    __typename: "Pack",
    id: string,
    name?: string | null,
    type: PackType,
    rhFactor: RhFactorType,
    aboSystem: AboSystemType,
    quantity: number,
    status: PackStatus,
    expiredAt: string,
    createdAt: string,
    organizationId: string,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    applicationPackDetails?:  {
      __typename: "ModelApplicationPackDetailConnection",
      nextToken?: string | null,
    } | null,
    orderPackDetails?:  {
      __typename: "ModelOrderPackDetailConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateApplicationSubscriptionVariables = {
  filter?: ModelSubscriptionApplicationFilterInput | null,
};

export type OnCreateApplicationSubscription = {
  onCreateApplication?:  {
    __typename: "Application",
    id: string,
    organizationId: string,
    applicantId: string,
    order?:  {
      __typename: "Order",
      id: string,
      status: OrderStatus,
      organizationId: string,
      applicationId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    applicant:  {
      __typename: "Account",
      id: string,
      name: string,
      userId: string,
      organizationId: string,
      createdAt: string,
      updatedAt: string,
      accountRoleId: string,
    },
    packDetails?:  {
      __typename: "ModelApplicationPackDetailConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    applicationOrderId?: string | null,
  } | null,
};

export type OnUpdateApplicationSubscriptionVariables = {
  filter?: ModelSubscriptionApplicationFilterInput | null,
};

export type OnUpdateApplicationSubscription = {
  onUpdateApplication?:  {
    __typename: "Application",
    id: string,
    organizationId: string,
    applicantId: string,
    order?:  {
      __typename: "Order",
      id: string,
      status: OrderStatus,
      organizationId: string,
      applicationId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    applicant:  {
      __typename: "Account",
      id: string,
      name: string,
      userId: string,
      organizationId: string,
      createdAt: string,
      updatedAt: string,
      accountRoleId: string,
    },
    packDetails?:  {
      __typename: "ModelApplicationPackDetailConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    applicationOrderId?: string | null,
  } | null,
};

export type OnDeleteApplicationSubscriptionVariables = {
  filter?: ModelSubscriptionApplicationFilterInput | null,
};

export type OnDeleteApplicationSubscription = {
  onDeleteApplication?:  {
    __typename: "Application",
    id: string,
    organizationId: string,
    applicantId: string,
    order?:  {
      __typename: "Order",
      id: string,
      status: OrderStatus,
      organizationId: string,
      applicationId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    applicant:  {
      __typename: "Account",
      id: string,
      name: string,
      userId: string,
      organizationId: string,
      createdAt: string,
      updatedAt: string,
      accountRoleId: string,
    },
    packDetails?:  {
      __typename: "ModelApplicationPackDetailConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    applicationOrderId?: string | null,
  } | null,
};

export type OnCreateApplicationPackDetailSubscriptionVariables = {
  filter?: ModelSubscriptionApplicationPackDetailFilterInput | null,
};

export type OnCreateApplicationPackDetailSubscription = {
  onCreateApplicationPackDetail?:  {
    __typename: "ApplicationPackDetail",
    id: string,
    applicationId: string,
    organizationId: string,
    packId: string,
    createdAt: string,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    application:  {
      __typename: "Application",
      id: string,
      organizationId: string,
      applicantId: string,
      createdAt: string,
      updatedAt: string,
      applicationOrderId?: string | null,
    },
    pack:  {
      __typename: "Pack",
      id: string,
      name?: string | null,
      type: PackType,
      rhFactor: RhFactorType,
      aboSystem: AboSystemType,
      quantity: number,
      status: PackStatus,
      expiredAt: string,
      createdAt: string,
      organizationId: string,
      updatedAt: string,
    },
    updatedAt: string,
  } | null,
};

export type OnUpdateApplicationPackDetailSubscriptionVariables = {
  filter?: ModelSubscriptionApplicationPackDetailFilterInput | null,
};

export type OnUpdateApplicationPackDetailSubscription = {
  onUpdateApplicationPackDetail?:  {
    __typename: "ApplicationPackDetail",
    id: string,
    applicationId: string,
    organizationId: string,
    packId: string,
    createdAt: string,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    application:  {
      __typename: "Application",
      id: string,
      organizationId: string,
      applicantId: string,
      createdAt: string,
      updatedAt: string,
      applicationOrderId?: string | null,
    },
    pack:  {
      __typename: "Pack",
      id: string,
      name?: string | null,
      type: PackType,
      rhFactor: RhFactorType,
      aboSystem: AboSystemType,
      quantity: number,
      status: PackStatus,
      expiredAt: string,
      createdAt: string,
      organizationId: string,
      updatedAt: string,
    },
    updatedAt: string,
  } | null,
};

export type OnDeleteApplicationPackDetailSubscriptionVariables = {
  filter?: ModelSubscriptionApplicationPackDetailFilterInput | null,
};

export type OnDeleteApplicationPackDetailSubscription = {
  onDeleteApplicationPackDetail?:  {
    __typename: "ApplicationPackDetail",
    id: string,
    applicationId: string,
    organizationId: string,
    packId: string,
    createdAt: string,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    application:  {
      __typename: "Application",
      id: string,
      organizationId: string,
      applicantId: string,
      createdAt: string,
      updatedAt: string,
      applicationOrderId?: string | null,
    },
    pack:  {
      __typename: "Pack",
      id: string,
      name?: string | null,
      type: PackType,
      rhFactor: RhFactorType,
      aboSystem: AboSystemType,
      quantity: number,
      status: PackStatus,
      expiredAt: string,
      createdAt: string,
      organizationId: string,
      updatedAt: string,
    },
    updatedAt: string,
  } | null,
};

export type OnCreateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    id: string,
    status: OrderStatus,
    organizationId: string,
    applicationId?: string | null,
    createdAt: string,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    application?:  {
      __typename: "Application",
      id: string,
      organizationId: string,
      applicantId: string,
      createdAt: string,
      updatedAt: string,
      applicationOrderId?: string | null,
    } | null,
    orderPackDetails?:  {
      __typename: "ModelOrderPackDetailConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    id: string,
    status: OrderStatus,
    organizationId: string,
    applicationId?: string | null,
    createdAt: string,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    application?:  {
      __typename: "Application",
      id: string,
      organizationId: string,
      applicantId: string,
      createdAt: string,
      updatedAt: string,
      applicationOrderId?: string | null,
    } | null,
    orderPackDetails?:  {
      __typename: "ModelOrderPackDetailConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    id: string,
    status: OrderStatus,
    organizationId: string,
    applicationId?: string | null,
    createdAt: string,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    application?:  {
      __typename: "Application",
      id: string,
      organizationId: string,
      applicantId: string,
      createdAt: string,
      updatedAt: string,
      applicationOrderId?: string | null,
    } | null,
    orderPackDetails?:  {
      __typename: "ModelOrderPackDetailConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateOrderPackDetailSubscriptionVariables = {
  filter?: ModelSubscriptionOrderPackDetailFilterInput | null,
};

export type OnCreateOrderPackDetailSubscription = {
  onCreateOrderPackDetail?:  {
    __typename: "OrderPackDetail",
    id: string,
    orderId: string,
    packId: string,
    organizationId: string,
    createdAt: string,
    order?:  {
      __typename: "Order",
      id: string,
      status: OrderStatus,
      organizationId: string,
      applicationId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    pack?:  {
      __typename: "Pack",
      id: string,
      name?: string | null,
      type: PackType,
      rhFactor: RhFactorType,
      aboSystem: AboSystemType,
      quantity: number,
      status: PackStatus,
      expiredAt: string,
      createdAt: string,
      organizationId: string,
      updatedAt: string,
    } | null,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    updatedAt: string,
  } | null,
};

export type OnUpdateOrderPackDetailSubscriptionVariables = {
  filter?: ModelSubscriptionOrderPackDetailFilterInput | null,
};

export type OnUpdateOrderPackDetailSubscription = {
  onUpdateOrderPackDetail?:  {
    __typename: "OrderPackDetail",
    id: string,
    orderId: string,
    packId: string,
    organizationId: string,
    createdAt: string,
    order?:  {
      __typename: "Order",
      id: string,
      status: OrderStatus,
      organizationId: string,
      applicationId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    pack?:  {
      __typename: "Pack",
      id: string,
      name?: string | null,
      type: PackType,
      rhFactor: RhFactorType,
      aboSystem: AboSystemType,
      quantity: number,
      status: PackStatus,
      expiredAt: string,
      createdAt: string,
      organizationId: string,
      updatedAt: string,
    } | null,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    updatedAt: string,
  } | null,
};

export type OnDeleteOrderPackDetailSubscriptionVariables = {
  filter?: ModelSubscriptionOrderPackDetailFilterInput | null,
};

export type OnDeleteOrderPackDetailSubscription = {
  onDeleteOrderPackDetail?:  {
    __typename: "OrderPackDetail",
    id: string,
    orderId: string,
    packId: string,
    organizationId: string,
    createdAt: string,
    order?:  {
      __typename: "Order",
      id: string,
      status: OrderStatus,
      organizationId: string,
      applicationId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    pack?:  {
      __typename: "Pack",
      id: string,
      name?: string | null,
      type: PackType,
      rhFactor: RhFactorType,
      aboSystem: AboSystemType,
      quantity: number,
      status: PackStatus,
      expiredAt: string,
      createdAt: string,
      organizationId: string,
      updatedAt: string,
    } | null,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    updatedAt: string,
  } | null,
};

export type OnCreateOrganizationJobSubscriptionVariables = {
  filter?: ModelSubscriptionOrganizationJobFilterInput | null,
};

export type OnCreateOrganizationJobSubscription = {
  onCreateOrganizationJob?:  {
    __typename: "OrganizationJob",
    id: string,
    type: OrganizationJobType,
    status: JobStatus,
    errorMessage?: string | null,
    createName?: string | null,
    createAccountName?: string | null,
    joinCode?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateOrganizationJobSubscriptionVariables = {
  filter?: ModelSubscriptionOrganizationJobFilterInput | null,
};

export type OnUpdateOrganizationJobSubscription = {
  onUpdateOrganizationJob?:  {
    __typename: "OrganizationJob",
    id: string,
    type: OrganizationJobType,
    status: JobStatus,
    errorMessage?: string | null,
    createName?: string | null,
    createAccountName?: string | null,
    joinCode?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteOrganizationJobSubscriptionVariables = {
  filter?: ModelSubscriptionOrganizationJobFilterInput | null,
};

export type OnDeleteOrganizationJobSubscription = {
  onDeleteOrganizationJob?:  {
    __typename: "OrganizationJob",
    id: string,
    type: OrganizationJobType,
    status: JobStatus,
    errorMessage?: string | null,
    createName?: string | null,
    createAccountName?: string | null,
    joinCode?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
