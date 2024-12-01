// 'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';

const data = [
  {    owner: 'John Doe',    costs: '$3,509.00',    region: 'US-West 1',    capacity: '99%',    lastEdited: '23/09/2023 13:00',  },  
  {    owner: 'Jane Smith',    costs: '$5,720.00',    region: 'US-East 2',    capacity: '80%',    lastEdited: '22/09/2023 10:45',  },  
  {    owner: 'David Clark',    costs: '$800.00',    region: 'EU-Central 1',    capacity: '40%',    lastEdited: '25/09/2023 16:20',  },  
  {    owner: 'Jane Smith',    costs: '$5,720.00',    region: 'US-East 2',    capacity: '80%',    lastEdited: '22/09/2023 10:45',  },  
  {    owner: 'Mike Johnson',    costs: '$4,200.00',    region: 'EU-West 1',    capacity: '60%',    lastEdited: '21/09/2023 14:30',  },  
  {    owner: 'Alice Brown',    costs: '$2,100.00',    region: 'US-West 2',    capacity: '75%',    lastEdited: '24/09/2023 09:15',  },
];

export const DebtsList = () => {
  return (
    <>
      <div className="sm:flex sm:items-center sm:justify-between sm:space-x-10 mt-3">
        <div>
          <h3 className="font-semibold text-tremor-content-strong">
            Workspaces
          </h3>
          <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
            Lista detallada de deudas
          </p>
        </div>
        <button
          type="button"
          className="mt-4 w-full whitespace-nowrap rounded-tremor-small bg-tremor-brand px-4 py-2.5 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis sm:mt-0 sm:w-fit"
        >
          Crear Deuda
        </button>
      </div>
      <Table className="mt-8">
        <TableHead>
          <TableRow className="border-b  dark:border-dark-tremor-border">
            <TableHeaderCell className="text-tremor-content dark:text-tremor-content-strong">
              Nombre
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content dark:text-tremor-content-strong">
              Dirección
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content dark:text-tremor-content-strong">
              % de intereses
            </TableHeaderCell>
            <TableHeaderCell className="text-right text-tremor-content dark:text-tremor-content-strong">
              Cantidad
            </TableHeaderCell>
            <TableHeaderCell className="text-right text-tremor-content dark:text-tremor-content-strong">
              Fecha del prestamo
            </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item.workspace}
              className="even:bg-tremor-background-muted even:dark:bg-dark-tremor-background-muted"
            >
              <TableCell>{item.owner}</TableCell>
              <TableCell>{item.region}</TableCell>
              <TableCell>{item.capacity}</TableCell>
              <TableCell className="text-right">{item.costs}</TableCell>
              <TableCell className="text-right">{item.lastEdited}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}