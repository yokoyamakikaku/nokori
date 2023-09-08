'use client'

import { FC, PropsWithChildren } from 'react'
import { Grid, View, useTheme } from '@aws-amplify/ui-react'

const PageContainer: FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme()

  return (
    <View>
      <Grid
        margin="0 auto"
        paddingBlock={theme.tokens.space.xxl}
        paddingInline={theme.tokens.space.medium}
        gap={theme.tokens.space.xl}
        maxWidth={theme.breakpoints.values.medium}>
        {children}
      </Grid>
    </View>
  )
}

export default PageContainer
