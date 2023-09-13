'use client'

import { CreatePackInput } from '@/API'
import { Grid, TableRow, TableCell, TextField, SelectField, Button,RadioGroupField,Radio, Flex, useTheme, Label } from '@aws-amplify/ui-react'
import { I18n } from 'aws-amplify'
import { FC } from 'react'
import { useAboSystemOptions, usePackTypeOptions, useRhFactorOptions, usePackStatusOptions } from '../../hooks'

interface AppendCreatePackFormRowProps {
  onSubmit: (input: CreatePackInput) => void
}

const AppendCreatePackFormRow: FC<AppendCreatePackFormRowProps> = () => {
  const theme = useTheme()

  const aboSystemOptions = useAboSystemOptions()
  const packTypeOptions = usePackTypeOptions()
  const rhFactorOptions = useRhFactorOptions()
  const packStatusOptions = usePackStatusOptions()

  return (
    <TableRow>
      <TableCell colSpan={8}>
        <Grid
          maxWidth={theme.breakpoints.values.medium}
          gap={theme.tokens.space.medium}
          templateColumns={'10rem 1fr'}>
          <Label>{I18n.get('pack.type')}</Label>
          <RadioGroupField
            labelHidden direction="row"
            name="type" label={I18n.get('pack.type')}>
            {packTypeOptions.map(({value, label})=> <Radio key={value} value={value}>{label}</Radio>)}
          </RadioGroupField>
          <Button>追加</Button>
        </Grid>
        {/* <Flex direction="column"
          alignItems="start"
          gap={theme.tokens.space.small}
          >
          <Flex direction="row" gap={theme.tokens.space.small}>

            <RadioGroupField
              grow={1}
              name="aboSystem" label={I18n.get('pack.aboSystem')}>
              {aboSystemOptions.map(({value, label})=> <Radio key={value} value={value}>{label}</Radio>)}
            </RadioGroupField>
            <RadioGroupField
              grow={1}
              name="rhFactor" label={I18n.get('pack.rhFactor')}>
              {rhFactorOptions.map(({value, label})=> <Radio key={value} value={value}>{label}</Radio>)}
            </RadioGroupField>
          </Flex>
          <TextField label={I18n.get('pack.name')} type="text" />


          <Flex direction="row" gap={theme.tokens.space.small}>
            <TextField label={I18n.get('pack.expiredAt.date')} type="date" />
            <TextField label={I18n.get('pack.expiredAt.time')} type="time" />
          </Flex>
          <TextField label={I18n.get('pack.quantity')} type="number" min={0} />
          <SelectField label={I18n.get('pack.status')} >
            {packStatusOptions.map(({value, label})=> <option key={value} value={value}>{label}</option>)}
          </SelectField> */}

        {/* </Flex> */}
      </TableCell>
    </TableRow>
  )
}

export default AppendCreatePackFormRow
