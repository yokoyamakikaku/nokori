'use client'

import { Breadcrumbs as ABreadcrumbs } from '@aws-amplify/ui-react'
import { I18n } from 'aws-amplify'

export default function Breadcrumbs () {
  return (
    <ABreadcrumbs items={[{
      href : '/',
      label: I18n.get('home')
    }, {
      href : '/user',
      label: I18n.get('user'),
    }, {
      label: I18n.get('user.setting.delete'),
    }]} />
  )
}
