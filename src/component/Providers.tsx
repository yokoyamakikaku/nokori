'use client'

import { FC, PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { Amplify, I18n } from '@aws-amplify/core'
import { translations } from '@aws-amplify/ui'
import { Authenticator } from '@aws-amplify/ui-react'
import config from '@/aws-exports'
import dict from '@/i18n/dict'

import AuthenticatorHeader from './AuthenticatorHeader'

Amplify.configure(config)
I18n.putVocabularies(translations)
I18n.setLanguage('ja')
I18n.putVocabularies(dict)

const queryClient = new QueryClient()

const Providers:FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Authenticator components={{
        Header: AuthenticatorHeader
      }}>
        {children}
      </Authenticator>
    </QueryClientProvider>
  )
}

export default Providers
