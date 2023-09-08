'use client'

import { I18n } from 'aws-amplify'
import { useForm } from 'react-hook-form'
import { Button, View, Heading, TextField, useTheme, Flex } from '@aws-amplify/ui-react'

interface FormValues {
  name: string
}

export default function JoinOrganization () {
  const theme = useTheme()
  const form = useForm<FormValues>()

  return (
    <View>
      <Heading
        level={1}
        marginBlockEnd={theme.tokens.space.medium}>
        {I18n.get('organization.join')}
      </Heading>
      <form action="">
        <Flex
          direction="column"
          alignItems="stretch"
          maxWidth={theme.breakpoints.values.medium}>
          <TextField
            label={I18n.get('organization.code')}
            required type="text" min={4}
            descriptiveText={I18n.get('organization.code.description.onJoinOrgnization')}
            placeholder={I18n.get('organization.code.placeholder')}
            {...form.register('name')} />
          <View>
            <Button type="submit" variation="primary">{I18n.get('join.submit')}</Button>
          </View>
        </Flex>
      </form>
    </View>
  )
}
