'use client'

import { View, Heading, useTheme, Text } from '@aws-amplify/ui-react'

const AuthenticatorHeader = () => {
  const theme = useTheme()
  return (
    <View textAlign="center" paddingBlock={theme.tokens.space.medium}>
      <Heading level={1} marginBlockEnd={theme.tokens.space.medium}>ノコリ</Heading>
      <Text>病院内の血液の在庫を管理する</Text>
    </View>
  )
}

export default AuthenticatorHeader
