'use client'

import { FC, PropsWithChildren } from 'react'
import { View, Grid, useTheme } from '@aws-amplify/ui-react'
import Navigation from './Navigation'

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme()
  return (
    <Grid
      templateRows="3.2rem 1fr"
      minHeight="100vh">
      <Navigation />
      {children}
    </Grid>
  )
}

export default AppLayout
