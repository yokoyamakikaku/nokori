'use client'

import { useMutation } from '@tanstack/react-query'
import { Auth } from '@aws-amplify/auth'
import { Heading, TextField, View, useTheme, Flex, Button, Alert } from '@aws-amplify/ui-react'
import { I18n } from 'aws-amplify'
import { useForm } from 'react-hook-form'

interface FormValues {
  oldPassword: string
  newPassword: string
}

export default function UpdatePassword () {
  const theme = useTheme()

  const form = useForm<FormValues>()

  const mutation = useMutation({
    async mutationFn (values: FormValues) {
      const user = await Auth.currentAuthenticatedUser()
      const data = await Auth.changePassword(user, values.oldPassword, values.newPassword)
      return data
    },
    async onSuccess() {
      form.reset()
    }
  })

  return (
    <View>
      <Heading level={1} marginBlockEnd={theme.tokens.space.medium}>{I18n.get('user.setting.password')}</Heading>
      <form onSubmit={form.handleSubmit(values => mutation.mutate(values))}>
        <Flex maxWidth={theme.breakpoints.values.medium} direction="column">
          <TextField
            label={I18n.get('user.password.current')} type="password" required
            {...form.register('oldPassword')} />
          <TextField
            label={I18n.get('user.password.new')} type="password" required
            {...form.register('newPassword')} />
          {mutation.isSuccess && <Alert variation='success'>{I18n.get('user.password.update.success')}</Alert>}
          {mutation.isError && <Alert variation='error'>{I18n.get('user.password.update.error')}</Alert>}
          <View>
            <Button variation="primary" type='submit'>{I18n.get('user.password.update.submit')}</Button>
          </View>
        </Flex>
      </form>
    </View>
  )
}
