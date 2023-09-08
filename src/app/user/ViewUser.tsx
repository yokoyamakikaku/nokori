'use client'

import { useQuery } from '@tanstack/react-query'
import { I18n } from 'aws-amplify'
import { Auth, CognitoUser } from '@aws-amplify/auth'
import { CognitoUserAttribute } from 'amazon-cognito-identity-js'
import { useTheme, Heading, View, Table, TableBody, TableRow, TableCell, Placeholder } from '@aws-amplify/ui-react'

export default function ViewUser () {
  const theme = useTheme()

  const query = useQuery({
    queryKey: ['user'],
    async queryFn() {
      const user = (await Auth.currentAuthenticatedUser()) as CognitoUser
      const id = user.getUsername()
      const email = await new Promise<string>((resolve, reject) => {
        user.getUserAttributes((error, attributes) => {
          if (error) reject(error)
          if (typeof attributes === 'undefined') reject(new Error('NoAttributes'))
          for(const attribtue of attributes as CognitoUserAttribute[]) {
            if (attribtue.Name !== 'email') continue
            resolve(attribtue.Value as string)
          }
          if (typeof attributes === 'undefined') reject(new Error('NoEmailAttribute'))
        })
      })
      return { id, email }
    }
  })

  return (
    <View>
      <Heading level={1} marginBlockEnd={theme.tokens.space.large}>{I18n.get('user.current')}</Heading>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>{I18n.get('user.id')}</TableCell>
            <TableCell>{query.data?.id ?? <Placeholder />}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{I18n.get('user.email')}</TableCell>
            <TableCell>{query.data?.email ?? <Placeholder />}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </View>
  )
}
