'use client'

import { FC, PropsWithChildren } from 'react'
import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { API, graphqlOperation, GraphQLResult } from '@aws-amplify/api'
import { View, Grid, useTheme, useAuthenticator } from '@aws-amplify/ui-react'

import Loading from './Loading'
import Error from './Error'
import Navigation from './Navigation'
import * as queries from './queries'
import { CurrentAccount, ListAccountsByUserIdAndOrganizationIdQuery, ListAccountsByUserIdAndOrganizationIdQueryVariabless } from './types'

const OrganizationLayout: FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme()

  const authenticator = useAuthenticator()
  const userId = authenticator.user.username ?? null
  const { organizationId } = useParams()
  const query = useQuery({
    enabled : typeof organizationId  === 'string' && typeof userId === 'string',
    queryKey: ['organization-layout', 'organization', organizationId],
    async queryFn () {
      const result = (await API.graphql(
        graphqlOperation(queries.listAccountsByUserIdAndorganizationId, {
          userId,
          organizationId,
          limit: 1
        } as ListAccountsByUserIdAndOrganizationIdQueryVariabless)
      )) as GraphQLResult<ListAccountsByUserIdAndOrganizationIdQuery>
      if (result.errors) throw result.errors

      const items = result.data?.listAccountsByUserIdAndOrganizationIdQuery?.items
      const account = items ? items[0] : null
      if (!account) throw Error('NoAccount')



      return {
        id              : account.id,
        name            : account.name,
        organizationId  : account.organization.id,
        organizationName: account.organization.name,
      } as CurrentAccount
    }
  })

  if (query.isLoading) return <Loading />
  if (query.isError) return <Error error={query.error} />

  return (
    <Grid templateColumns="12rem 1fr">
      <Navigation />
      <View
        padding={theme.tokens.space.medium}>
        {children}
      </View>
    </Grid>
  )
}

export default OrganizationLayout
