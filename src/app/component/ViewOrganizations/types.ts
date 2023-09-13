import { RoleType, ModelSortDirection, ModelAccountFilterInput } from '@/API'

export interface Account {
  id: string
  name: string
  organization: {
    id: string
    name: string
  }
}

export type ListAccountsByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAccountsByUserIdQuery = {
  listAccountsByUserId?:  {
    items: Account[],
    nextToken?: string | null,
  } | null,
};
