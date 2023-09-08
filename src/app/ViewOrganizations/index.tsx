'use client'

import { I18n } from 'aws-amplify'
import Link from 'next/link'
import { View, Heading, useTheme, Flex, Button } from '@aws-amplify/ui-react'

import ListMenu from '@/component/ListMenu'

export default function ViewOrganizations () {
  const theme = useTheme()
  return (
    <View>
      <Flex alignItems="center" marginBlockEnd={theme.tokens.space.large}>
        <Heading grow={1} level={1}>{I18n.get('organization')}</Heading>
        <Flex>
          <Link href="/create" passHref>
            <Button>{I18n.get('create.submit')}</Button>
          </Link>
          <Link href="/join" passHref>
            <Button>{I18n.get('join.submit')}</Button>
          </Link>
        </Flex>
      </Flex>
      <ListMenu items={[{
        label: 'xxx病院',
        href : '/xxxx',
      }]} />
    </View>
  )
}
