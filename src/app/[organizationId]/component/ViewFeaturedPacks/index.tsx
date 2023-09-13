'use client'

import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'
import { API, GraphQLResult, graphqlOperation } from '@aws-amplify/api'
import { View, Heading, useTheme, Button, Flex } from '@aws-amplify/ui-react'

import { PackListItem } from '@/service/api/pack/type'
import BasicTablePlaceholder from '@/component/BasicTablePlaceholder'
import PacksTable, { columns } from '@/component/pack/PacksTable'

import * as queries from './queries'

const ViewFeaturedPacks = () => {
  const theme = useTheme()

  const listQuery = useQuery({
    queryKey: ['packs-featured'],
    queryFn : async () => {
      const packs: PackListItem[] = []
      let nextToken: string | undefined | null

      do {
        const result = await API.graphql(graphqlOperation(queries.listPacks, {
          nextToken
        })) as GraphQLResult<{ listPacks: { items: PackListItem[], nextToken: string | undefined | null } }>
        if (result.errors) throw result.errors
        packs.push(...(result.data?.listPacks.items ?? []))
        nextToken = result.data?.listPacks.nextToken
      } while (nextToken)

      return packs
    }
  })

  return (
    <View>
      <Flex
        marginBlockEnd={theme.tokens.space.large}
        wrap="wrap" alignItems="center"
        gap={theme.tokens.space.medium}>
        <Heading level={1} grow={1}>期限切れが近い在庫</Heading>
        <Link href="/pack/new" passHref>
          <Button variation="primary">在庫を登録する</Button>
        </Link>
      </Flex>
      {listQuery.isLoading && <BasicTablePlaceholder columnCount={columns.length}/>}
      {listQuery.isSuccess && <PacksTable packs={listQuery.data} />}
    </View>
  )
}

export default ViewFeaturedPacks
