
import { RowType } from '../../../constant';

export const displayOrnamentColumn = [
  {
    accessorKey: 'name',
    header: 'Ornament Name',
  },
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
    header: 'Weight',
  },
  
  
  {
    accessorKey: 'name',
    header: 'Price  ',
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
    header: 'Making Changes',
  },
  {
    accessorKey: 'name',
    header: 'Extra Amount',
  },
  ]
