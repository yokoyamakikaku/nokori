import type { Metadata } from 'next'

import '@aws-amplify/ui-react/styles.css'
import '@/styles/globals.css'

import Providers from '@/component/Providers'
import AppLayout from '@/app/AppLayout'

export const metadata: Metadata = {
  title      : 'ノコリ',
  description: '病院内の血液の在庫を管理する',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ja'>
      <body>
        <Providers>
          <AppLayout>
            {children}
          </AppLayout>
        </Providers>
      </body>
    </html>
  )
}
