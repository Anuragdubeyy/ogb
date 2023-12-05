
import { RowType } from '../../../../constant';

export const homeColumn = [
  {
    accessorKey: 'id',
    header: 'Ornament Image',
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
    header: 'Ornament Name',
  },
  
  {
    accessorKey: 'name',
    header: 'Category',
  },
  {
    accessorKey: 'name',
    header: 'Weight',
  },
  {
    accessorKey: 'name',
    header: 'Customer Name',
  },
  
  {
    accessorKey: 'name',
    header: 'Mobile',
  },
  {
    accessorKey: 'name',
    header: 'Booking Date',
  },
  {
    accessorKey: 'name',
    header: 'Days',
  },
  {
    accessorKey: 'name',
    header: 'Status',
  },
  ]
