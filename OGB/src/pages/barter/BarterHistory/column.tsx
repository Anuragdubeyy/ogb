
import { RowType } from '../../../constant';

export const barterHistoryColumn = [
  
  {
    accessorKey: 'name',
    header: 'Ornament Name',
  },
  {
    accessorKey: 'name',
    header: 'Image',
    cell: ({ row }: { row: RowType }) => (
      <div className="h-12 w-12 object-cover overflow-hidden mx-auto border rounded-md">
        <img
          className="object-cover h-full w-full"
          src={row.getValue('image')}
          alt=""
        />
      </div>
    ),
  },
  
  {
    accessorKey: 'name',
    header: 'Weight(gm)',
  },
  {
    accessorKey: 'name',
    header: 'Category',
  },
  {
    accessorKey: 'name',
    header: 'Barter Name',
  },
  {
    accessorKey: 'name',
    header: 'Contact no.',
  },
  {
    accessorKey: 'name',
    header: 'Email',
  },
  
  
  {
    accessorKey: 'name',
    header: 'Address',
  },

  {
    accessorKey: 'name',
    header: 'Date',
  },
  {
    accessorKey: 'name',
    header: 'Status',
  },
  {
    accessorKey: 'name',
    header: 'Owner Details',
  }

  ]
