'use client'

import { I18n } from 'aws-amplify'
import { Heading, View, useTheme } from '@aws-amplify/ui-react'
import ListMenu from '@/component/ListMenu'

export default function ViewUserMenu () {
  const theme = useTheme()
  return (
    <View>
      <Heading level={1} marginBlockEnd={theme.tokens.space.large}>{I18n.get('user.setting')}</Heading>
      <ListMenu items={[{
        href : '/user/email',
        label: I18n.get('user.setting.email')
      }, {
        href : '/user/password',
        label: I18n.get('user.setting.password')
      }, {
        href : '/user/delete',
        label: I18n.get('user.setting.delete')
      }]} />
    </View>
  )
}
