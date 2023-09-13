'use client'

import { useMemo } from 'react'
import { I18n } from 'aws-amplify'
import { API, graphqlOperation, GraphQLResult } from '@aws-amplify/api'
import Link from 'next/link'
import { View, Heading, useTheme, Flex, Button, useAuthenticator, Loader, Alert } from '@aws-amplify/ui-react'

import ListMenu, {ListMenuItem} from '@/component/ListMenu'
import { useQuery } from '@tanstack/react-query'

import { Account, ListAccountsByUserIdQuery, ListAccountsByUserIdQueryVariables } from './types'
import * as queries from './queries'

export default function ViewOrganizations () {
  const theme = useTheme()

  const authenticator = useAuthenticator()
  const userId = authenticator?.user?.username ?? null

  const query = useQuery({
    enabled : typeof userId === 'string',
    queryKey: [userId, 'accounts'],
    async queryFn () {
      const accounts: Account[] = []

      let nextToken: string | null = null
      do {
        const result = (await API.graphql(
          graphqlOperation(queries.listAccountsByUserId, {
            userId
          } as ListAccountsByUserIdQueryVariables)
        )) as GraphQLResult<ListAccountsByUserIdQuery>
        if (result.errors) throw result.errors
        for (const item of result.data?.listAccountsByUserId?.items ?? []) accounts.push(item)
        nextToken = result.data?.listAccountsByUserId?.nextToken ?? null
      } while (typeof nextToken !== 'string')

      return accounts
    }
  })

  const items = useMemo(() => {
    if (!query.data) return null
    const items: ListMenuItem[] = []
    for (const account of query.data) {
      items.push({
        label: account.organization.name,
        href : `/${account.organization.id}`
      })
    }
    return items
  }, [query.data])


  return (
    <View>
      <Flex alignItems="center" marginBlockEnd={theme.tokens.space.large}>
        <Heading grow={1} level={1}>{I18n.get('organization')}</Heading>
        <Flex>
          <Link href="/new" passHref>
            <Button>{I18n.get('create.submit')}</Button>
          </Link>
          <Link href="/join" passHref>
            <Button>{I18n.get('join.submit')}</Button>
          </Link>
        </Flex>
      </Flex>
      {query.isLoading && (<Loader />)}
      {query.isError && (<Alert variation="error" heading={I18n.get('error')}>{String(query.error)}</Alert>)}
      {(query.isSuccess && items) && <ListMenu items={items} />}
    </View>
  )
}
