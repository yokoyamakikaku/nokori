'use client'

import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableFoot,
  Placeholder
} from '@aws-amplify/ui-react'
import { FC, useMemo } from 'react'

interface BasicTablePlaceholder {
  columnCount?: number
}

const BasicTablePlaceholder: FC<BasicTablePlaceholder> = ({ columnCount = 5}) => {

  const columns = useMemo(() => Array.from({ length: columnCount }).fill(null), [columnCount])

  return (
    <Table>
      <TableHead>
        <TableRow>
          {columns.map((c,i) => (
            <TableCell as="th" key={i}>
              <Placeholder />
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          {columns.map((c,i) => (
            <TableCell as="td" key={i}>
              <Placeholder />
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
      <TableFoot>
        <TableRow>
          {columns.map((c,i) => (
            <TableCell as="th" key={i}>
              <Placeholder />
            </TableCell>
          ))}
        </TableRow>
      </TableFoot>
    </Table>
  )
}

export default BasicTablePlaceholder
