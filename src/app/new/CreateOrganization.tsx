'use client'

import { useEffect } from 'react'
import { I18n } from 'aws-amplify'
import { useMutation, useQuery } from '@tanstack/react-query'
import { API, graphqlOperation, GraphQLResult } from '@aws-amplify/api'
import { RegisterOptions, useForm } from 'react-hook-form'
import { Button, View, Heading, TextField, useTheme, Flex, Alert, useAuthenticator } from '@aws-amplify/ui-react'
import { useRouter } from 'next/navigation'

import { JobStatus, OrganizationJobType } from '@/API'
import {
  GetOrganizationJobQuery,
  GetOrganizationJobQueryVariables,
  CreateOrganizationJobInput,
  CreateOrganizationJobMutationVariables,
  CreateOrganizationJobMutation
} from './types'
import * as queries from './queries'
import * as mutations from './mutations'

type FormValues = Omit<CreateOrganizationJobInput, 'status' | 'type' | 'createUserId'>

export default function CreateOrganization () {
  const authenticator = useAuthenticator()

  const theme = useTheme()
  const {
    register, handleSubmit, formState: { errors, touchedFields,  }
  } = useForm<FormValues>({
    mode         : 'onChange',
    defaultValues: {
      createName       : 'テスト病院',
      createAccountName: 'テスト'
    }
  })
  const router = useRouter()

  const mutation = useMutation({
    async mutationFn (values: FormValues) {
      const createUserId = authenticator.user.username
      if (typeof createUserId !== 'string') throw Error('NotAuthorized')

      const result = (await API.graphql(
        graphqlOperation(mutations.createOrganizationJob, {
          input: {
            ...values,
            status      : JobStatus.CREATED,
            type        : OrganizationJobType.CREATE,
            createUserId: createUserId
          }
        } as CreateOrganizationJobMutationVariables)
      )) as GraphQLResult<CreateOrganizationJobMutation>
      if (result.errors) throw result.errors
      const id = result.data?.createOrganizationJob.id
      if (typeof id !== 'string') throw Error('InvalidJob')
      return { id }
    }
  })

  const id = mutation.data?.id
  const query = useQuery({
    queryKey       : [id],
    enabled        : typeof id === 'string',
    refetchInterval: 100,
    async queryFn () {
      try {
        const result = (await API.graphql(
          graphqlOperation(queries.getOrganizationJob, {
            id
          } as GetOrganizationJobQueryVariables)
        )) as GraphQLResult<GetOrganizationJobQuery>
        if (result.errors) throw result.errors
        const createId = result.data?.getOrganizationJob.createId
        const errorMessage = result.data?.getOrganizationJob.errorMessage
        const status = result.data?.getOrganizationJob.status
        switch (status) {
          case JobStatus.CREATED: {
            return {
              status,
              createId    : null,
              errorMessage: errorMessage ?? I18n.get('error'),
            }
          }
          case JobStatus.STARTED: {
            return {
              status,
              createId    : null,
              errorMessage: errorMessage ?? I18n.get('error'),
            }
          }
          case JobStatus.FAILED: {
            return {
              status,
              createId    : null,
              errorMessage: errorMessage ?? I18n.get('error'),
            }
          }
          case JobStatus.FINISHED: {
            if (typeof createId !== 'string') throw Error('InvalidSchemaJob')
            createId
            return {
              status,
              createId    : createId,
              errorMessage: null,
            }
          }
          default: throw Error('InvalidJobStatus')
        }
      } catch (error: any) {
        return {
          status      : JobStatus.FAILED,
          createId    : null,
          errorMessage: String(error),
        }
      }
    }
  })

  useEffect(() => {
    const finised = query.data?.status === JobStatus.FINISHED
    if (!finised) return
    const orginzationId = query.data?.createId as string
    const timer = window.setTimeout(() => {
      router.push(`/${orginzationId}`)
    }, 500)
    return () => clearTimeout(timer)
  }, [query.data?.createId, query.data?.status, router])

  const jobCreated = typeof query.data?.status === 'string' && query.data.status !== JobStatus.FAILED
  const formDisabeld = mutation.isLoading || jobCreated

  const registerOptions: RegisterOptions<FormValues, any> = {
    required: I18n.get('form.required'),
    disabled: formDisabeld
  }

  return (
    <View>
      <Heading
        level={1}
        marginBlockEnd={theme.tokens.space.medium}>
        {I18n.get('organization.create')}
      </Heading>
      <form onSubmit={handleSubmit(values => mutation.mutate(values))}>
        <Flex
          direction="column"
          alignItems="stretch"
          maxWidth={theme.breakpoints.values.medium}>
          <TextField
            label={I18n.get('organization.name')}
            type="text" min={4}
            placeholder={I18n.get('organization.name.placeholder.onCreateOrganization')}
            errorMessage={errors.createName?.message}
            hasError={errors.createName && touchedFields.createName}
            {...register('createName', registerOptions)} />
          <TextField
            label={I18n.get('account.name')}
            type="text" min={4}
            descriptiveText={I18n.get('account.name.description')}
            placeholder={I18n.get('account.name.placeholder.onCreateOrganization')}
            errorMessage={errors.createAccountName?.message}
            hasError={errors.createAccountName && touchedFields.createAccountName}
            {...register('createAccountName', registerOptions)} />
            {query.data?.status === JobStatus.CREATED && <Alert variation="info" heading={I18n.get('organization.create.job.created')} />}
            {query.data?.status === JobStatus.STARTED && <Alert variation="info" heading={I18n.get('organization.create.job.started')} />}
            {query.data?.status === JobStatus.FINISHED && <Alert variation="success" heading={I18n.get('organization.create.job.finisehd')} />}
            {query.data?.status === JobStatus.FAILED && (
              <Alert variation="warning" heading={I18n.get('organization.create.job.failed')}>{query.data.errorMessage}</Alert>
            )}
          <View>
            <Button
              disabled={formDisabeld}
              type="submit" variation="primary">
                {mutation.isLoading === false && I18n.get('create.submit')}
                {mutation.isLoading === true && I18n.get('create.submitting')}
                {jobCreated && I18n.get('organization.create.processing')}
            </Button>
          </View>
        </Flex>
      </form>
    </View>
  )
}
