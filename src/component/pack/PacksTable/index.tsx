import { FC } from 'react'
import { createColumnHelper, useReactTable, getCoreRowModel } from '@tanstack/react-table'

import { PackListItem } from '@/service/api/pack/type'
import BasicTable from '@/component/BasicTable'

interface PacksTableProps {
  packs: PackListItem[]
}

type PacksTableItem = PackListItem

const columnHelper = createColumnHelper<PacksTableItem>()

export const columns = [
  columnHelper.accessor('name', {
    header: '管理名',
  }),
  columnHelper.accessor('aboSystem', {
    header: 'ABO型'
  }),
  columnHelper.accessor('rhFactor', {
    header: 'RH'
  }),
  columnHelper.accessor('type', {
    header: '種別'
  }),
  columnHelper.accessor('status', {
    header: '状態'
  }),
  columnHelper.accessor('expiredAt', {
    header: '期限'
  }),
]

const PacksTable: FC<PacksTableProps> = ({ packs }) => {
  const table = useReactTable({
    columns,
    data           : packs,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <BasicTable table={table} />
  )
}

export default PacksTable
