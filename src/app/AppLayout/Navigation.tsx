'use client'

import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { useTheme, Button, Flex, Menu, MenuItem, View, MenuButton, useAuthenticator } from '@aws-amplify/ui-react'
import { FaUser } from 'react-icons/fa'

const GlobalNavigation:FC = () => {
  const theme = useTheme()
  const router = useRouter()
  const authenticator = useAuthenticator()

  return (
    <Flex
      direction="row" gap="0"
      alignItems="stretch"
      style={{
        borderBottom: `solid ${theme.tokens.borderWidths.small} ${theme.tokens.colors.border.disabled}`
      }}>
        <View grow={1}>
          <Link href="/">
            <Button padding={theme.tokens.space.small} variation='link'>ノコリ</Button>
          </Link>
        </View>

        <Menu
          trigger={
            <MenuButton variation="link">
              <FaUser />
            </MenuButton>
          }>
          <MenuItem onClick={() => router.push('/')}>組織の一覧</MenuItem>
          <MenuItem onClick={() => router.push('/user')}>ユーザ</MenuItem>
          <MenuItem onClick={() => authenticator.signOut()}>ログアウト</MenuItem>
          <MenuItem onClick={() => router.push('/support')}>問い合わせ</MenuItem>
          <MenuItem onClick={() => router.push('/terms')}>利用規約</MenuItem>
        </Menu>
    </Flex>
  )
}

export default GlobalNavigation
