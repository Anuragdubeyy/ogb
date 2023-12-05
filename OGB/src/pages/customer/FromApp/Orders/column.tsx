
import { RowType } from '../../../../constant';

export const OrderColumn = [
  {
    accessorKey: 'id',
    header: 'Customer Name',
  },
  {
    accessorKey: 'id',
    header: 'Ornament Name',
  },
  {
    accessorKey: 'id',
    header: 'Price',
  },
  {
    accessorKey: 'id',
    header: 'Weight ',
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
    accessorKey: 'id',
    header: 'Quantity',
  },
  {
    accessorKey: 'name',
    header: 'Address',
  },
  
  {
    accessorKey: 'name',
    header: 'Contact No.',
  },
  {
    accessorKey: 'name',
    header: 'Date',
  },
  {
    accessorKey: 'name',
    header: 'Category',
  },
  
  {
    accessorKey: 'name',
    header: 'Action',
  },
  ]
