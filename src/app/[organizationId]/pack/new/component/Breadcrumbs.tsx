'use client'

import { Breadcrumbs as ABreadcrumbs } from '@aws-amplify/ui-react'

export default function Breadcrumbs () {
  return (
    <ABreadcrumbs items={[{
      href : '/',
      label: 'ホーム'
    }, {
      label: 'パックの登録'
    }]} />
  )
}
