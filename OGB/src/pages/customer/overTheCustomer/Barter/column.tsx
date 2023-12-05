
import { RowType } from '../../../../constant';

export const barterColumn = [

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
    header: 'Status',
  },
  {
    accessorKey: 'name',
    header: 'Action',
  },
  ]
