'use client'

import { Breadcrumbs as ABreadcrumbs } from '@aws-amplify/ui-react'
import { I18n } from 'aws-amplify'

export default function Breadcrumbs () {
  return (
    <ABreadcrumbs items={[{
      href : '/',
      label: I18n.get('home')
    }, {
      label: I18n.get('user')
    }]} />
  )
}
