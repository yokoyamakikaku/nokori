'use client'
import { I18n } from 'aws-amplify'
import { useState } from 'react'

import {
  Button, View,
  Table, TableHead, TableBody,
  TableRow, TableCell, Flex, useTheme
} from '@aws-amplify/ui-react'
import { FiEdit, FiDelete } from 'react-icons/fi'

import { AboSystemType, CreatePackInput, PackStatus, PackType, RhFactorType } from '@/API'
import AppendCreatePackFormRow from './AppendCreatePackFormRow'

const CreatePacks = () => {
  const theme = useTheme()
  const [inputs, setInputs] = useState<CreatePackInput[]>([{
    aboSystem: AboSystemType.A,
    expiredAt: '2023/01/01 00:00',
    rhFactor : RhFactorType.NEGATIVE,
    type     : PackType.FFP,
    status   : PackStatus.DISPOSED,
    quantity : 200
  }])

  return (
    <Flex
      direction="column"
      gap={theme.tokens.space.small}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{I18n.get('pack.name')}</TableCell>
            <TableCell>{I18n.get('pack.aboSystem')}</TableCell>
            <TableCell>{I18n.get('pack.rhFactor')}</TableCell>
            <TableCell>{I18n.get('pack.type')}</TableCell>
            <TableCell>{I18n.get('pack.expiredAt')}</TableCell>
            <TableCell>{I18n.get('pack.quantity')}</TableCell>
            <TableCell>{I18n.get('pack.status')}</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {inputs.map((input, index) => (
            <TableRow key={index}>
              <TableCell>{input.name}</TableCell>
              <TableCell>{input.aboSystem}</TableCell>
              <TableCell>{input.rhFactor}</TableCell>
              <TableCell>{input.type}</TableCell>
              <TableCell>{input.expiredAt}</TableCell>
              <TableCell>{input.quantity}</TableCell>
              <TableCell>{input.status}</TableCell>
              <TableCell>
                <Flex gap={theme.tokens.space.xs}>
                  <Button>
                    <FiEdit />
                  </Button>
                  <Button>
                    <FiDelete />
                  </Button>
                </Flex>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableBody>
          <AppendCreatePackFormRow
            onSubmit={input => setInputs(inputs => [...inputs, input])} />
        </TableBody>
      </Table>
      <View>
        <Button>登録する</Button>
      </View>
    </Flex>
  )
}

export default CreatePacks
