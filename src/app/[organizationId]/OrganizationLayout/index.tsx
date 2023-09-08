'use client'

import { FC, PropsWithChildren } from 'react'
import { View, Grid, useTheme } from '@aws-amplify/ui-react'
import Navigation from './Navigation'

const OrganizationLayout: FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme()
  return (
    <Grid templateColumns="12rem 1fr">
      <Navigation />
      <View
        padding={theme.tokens.space.medium}>
        {children}
      </View>
    </Grid>
  )
}

export default OrganizationLayout
