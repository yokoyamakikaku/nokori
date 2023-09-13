import { OrganizationJobType, JobStatus } from '@/API'

export type CreateOrganizationJobInput = {
  type: OrganizationJobType
  status: JobStatus
  createName: string
  createAccountName: string
  createUserId: string
};

export type CreateOrganizationJobMutationVariables = {
  input: CreateOrganizationJobInput
};

export type CreateOrganizationJobMutation = {
  createOrganizationJob: {
    id: string
  }
}

export type GetOrganizationJobQueryVariables = {
  id: string
}

export type GetOrganizationJobQuery = {
  getOrganizationJob: {
    status: JobStatus
    errorMessage?: string
    createId?: string
  }
}
