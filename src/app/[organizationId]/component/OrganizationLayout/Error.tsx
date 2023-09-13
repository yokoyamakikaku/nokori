'use client'

import { I18n } from 'aws-amplify'
import { Alert, View } from '@aws-amplify/ui-react'

const Error: FC<{ error: any }> = ({ error }) => {
  return (
    <View>
      <Alert heading={I18n.get('error')} variation="error">
        {String(error)}
      </Alert>
    </View>

  )
}

export default Error
