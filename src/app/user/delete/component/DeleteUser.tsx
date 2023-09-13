'use client'

import { useMutation } from '@tanstack/react-query'
import { Auth } from '@aws-amplify/auth'
import { Heading, TextField, View, useTheme, Flex, Button, Alert } from '@aws-amplify/ui-react'
import { I18n } from 'aws-amplify'
import { useForm } from 'react-hook-form'

interface FormValues {}

export default function DeleteUser () {
  const theme = useTheme()

  const form = useForm<FormValues>()

  const mutation = useMutation({
    async mutationFn () {
      return null
    },
    async onSuccess() {
      form.reset()
    }
  })

  return (
    <View>
      <Heading level={1} marginBlockEnd={theme.tokens.space.medium}>{I18n.get('user.delete')}</Heading>
      <form onSubmit={form.handleSubmit(values => mutation.mutate())}>
        <Flex maxWidth={theme.breakpoints.values.medium} direction="column">
          <Alert variation='error'>{I18n.get('user.delete.description')}</Alert>
          {mutation.isSuccess && <Alert variation='success'>{I18n.get('user.delete.success')}</Alert>}
          {mutation.isError && <Alert variation='error'>{I18n.get('user.delete.error')}</Alert>}
          <View>
            <Button variation="warning" type='submit'>{I18n.get('user.delete.submit')}</Button>
          </View>
        </Flex>
      </form>
    </View>
  )
}
