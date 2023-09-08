'use client'

import {
  flexRender,
  Table as ReactTable
} from '@tanstack/react-table'
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableFoot,
  useTheme,
  Text
} from '@aws-amplify/ui-react'

interface BasicTableProps<T> {
  table: ReactTable<T>
}

const BasicTable = <T extends unknown> ({ table }: BasicTableProps<T>) => {
  const theme = useTheme()
  const rows = table.getRowModel().rows
  const columns = table.getLeafHeaders().length
  return (
    <Table>
      <TableHead>
        {table.getHeaderGroups().map(headerGroup => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <TableCell key={header.id}>
                {header.isPlaceholder ? null : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {rows.map(row => (
          <TableRow key={row.id}>
            {row.getVisibleCells().map(cell => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
        {rows.length === 0 && (
          <TableRow>
            <TableCell colSpan={columns}>
              <Text
                padding={theme.tokens.space.xxl}
                textAlign="center" variation='tertiary'>
                  表示する内容がありません
              </Text>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}

export default BasicTable
