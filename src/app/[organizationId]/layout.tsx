import type { Metadata } from 'next'

import '@aws-amplify/ui-react/styles.css'
import OrganizationLayout from './component/OrganizationLayout'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <OrganizationLayout>
      {children}
    </OrganizationLayout>
  )
}
