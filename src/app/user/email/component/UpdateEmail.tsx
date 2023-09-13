'use client'

import { useMutation } from '@tanstack/react-query'
import { Auth } from '@aws-amplify/auth'
import { Heading, TextField, View, useTheme, Flex, Button, Alert } from '@aws-amplify/ui-react'
import { I18n } from 'aws-amplify'
import { useForm } from 'react-hook-form'

interface FormValues {
  email: string
}

export default function UpdateEmail () {
  const theme = useTheme()

  const form = useForm<FormValues>()

  const mutation = useMutation({
    async mutationFn (values: FormValues) {
      const user = await Auth.currentAuthenticatedUser()
      const data = await Auth.updateUserAttributes(user, {
        email: values.email
      })
      return data
    },
    async onSuccess() {
      form.reset()
    }
  })

  return (
    <View>
      <Heading level={1} marginBlockEnd={theme.tokens.space.medium}>{I18n.get('user.setting.email')}</Heading>
      <form onSubmit={form.handleSubmit(values => mutation.mutate(values))}>
        <Flex maxWidth={theme.breakpoints.values.medium} direction="column">
          <TextField
            label={I18n.get('user.email.new')} type="email" required
            {...form.register('email')} />
          {mutation.isSuccess && <Alert variation='success'>{I18n.get('user.email.update.success')}</Alert>}
          {mutation.isError && <Alert variation='error'>{I18n.get('user.email.update.error')}</Alert>}
          <View>
            <Button variation="primary" type='submit'>{I18n.get('user.email.update.submit')}</Button>
          </View>
        </Flex>
      </form>
    </View>
  )
}
