export interface Orgnization {
  id: string
  name: string
}

export interface ListOrganizationQueryVariables {
  userId: string
}

export interface ListOrganizationQuery {
  listOrganizationQuery: {
    items: Orgnization[]
    nextToken?: string | null
  }
}
