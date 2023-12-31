
import { RowType } from '../../../constant';

export const barterAvailableColumn = [
  {
    accessorKey: 'id',
    header: 'Product ID',
  },
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
    header: 'Price (Rs)',
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
    header: 'Weight(gm)',
  },
  {
    accessorKey: 'name',
    header: 'Category',
  },
  {
    accessorKey: 'name',
    header: 'Carat',
  },
  {
    accessorKey: 'name',
    header: 'Height',
  },
  {
    accessorKey: 'name',
    header: 'Width',
  },
  {
    accessorKey: 'name',
    header: 'Status',
  }
  ]
