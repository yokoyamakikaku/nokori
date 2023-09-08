'use client'

import { I18n } from 'aws-amplify'
import { useForm } from 'react-hook-form'
import { Button, View, Heading, TextField, useTheme, Flex } from '@aws-amplify/ui-react'

interface FormValues {
  name: string
}

export default function CreateOrganization () {
  const theme = useTheme()
  const form = useForm<FormValues>()

  return (
    <View>
      <Heading
        level={1}
        marginBlockEnd={theme.tokens.space.medium}>
        {I18n.get('organization.create')}
      </Heading>
      <form action="">
        <Flex
          direction="column"
          alignItems="stretch"
          maxWidth={theme.breakpoints.values.medium}>
          <Heading level={2}>{I18n.get('organization')}</Heading>
          <TextField
            label={I18n.get('organization.name')}
            required type="text" min={4}
            placeholder={I18n.get('organization.name.placeholder.onCreateOrganization')}
            {...form.register('name')} />
          <Heading level={2}>{I18n.get('account')}</Heading>
          <TextField
            label={I18n.get('account.name')}
            required
            type="text"
            min={4}
            descriptiveText={I18n.get('account.name.description')}
            placeholder={I18n.get('account.name.placeholder.onCreateOrganization')}
            {...form.register('name')} />
          <View>
            <Button type="submit" variation="primary">{I18n.get('create.submit')}</Button>
          </View>
        </Flex>
      </form>
    </View>
  )
}
