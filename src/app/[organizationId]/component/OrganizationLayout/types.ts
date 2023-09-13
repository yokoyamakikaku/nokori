import { RoleType } from '@/API'

export type Account = {
  id: string
  name: string
  role: {
    type: RoleType
  }
  organization: {
    id: string
    name: string
  }
}

export type ListAccountsByUserIdAndOrganizationIdQueryVariabless = {
  userId: string
  organizationId: string
  limit?: number | null
}

export type ListAccountsByUserIdAndOrganizationIdQuery = {
  listAccountsByUserIdAndOrganizationIdQuery?: {
    items?: Account[]
  }
}
