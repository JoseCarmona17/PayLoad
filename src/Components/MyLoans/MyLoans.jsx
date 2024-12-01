// 'use client';
import { BarList, Card } from '@tremor/react';
import { useState } from 'react';

const pages = [
  {
    name: 'Juan Camilo',
    value: 200000,
  },
  {
    name: 'Andres',
    value: 500000,
  },
  {
    name: 'Julian ',
    value: 350000,
  },
  {
    name: 'Fabian',
    value: 70000,
  },
  {
    name: 'Maria Jose',
    value: 782000,
  },
  {
    name: 'Diego',
    value: 280000,
  },
  {
    name: 'Jose Andres',
    value: 400000,
  },
];

const valueFormatter = (number) =>
  `${Intl.NumberFormat('us').format(number).toString()}`;

export const MyLoans = () => {
  const [extended, setExtended] = useState(false);
  return (
    <>
      <Card className="p-0 sm:mx-auto sm:max-w-lg">
        <div className="flex items-center justify-between border-b border-tremor-border p-6 dark:border-dark-tremor-border">
          <p className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Deudores
          </p>
          <p className="text-tremor-label font-medium uppercase text-tremor-content dark:text-dark-tremor-content">
            Cantidad
          </p>
        </div>
        <div
          className={`overflow-hidden p-6 ${extended ? '' : 'max-h-[260px]'}`}
        >
          <BarList data={pages} valueFormatter={valueFormatter} />
        </div>

        <div
          className={`flex justify-center ${
            extended
              ? 'px-6 pb-6'
              : 'absolute inset-x-0 bottom-0 rounded-b-tremor-default bg-gradient-to-t from-tremor-background to-transparent py-7 dark:from-dark-tremor-background'
          }`}
        >
          <button
            className="flex items-center justify-center rounded-tremor-small border border-tremor-border bg-tremor-background px-2.5 py-2 text-tremor-default font-medium text-tremor-content-strong shadow-tremor-input hover:bg-tremor-background-muted dark:border-dark-tremor-border dark:bg-dark-tremor-background dark:text-dark-tremor-content-strong dark:shadow-dark-tremor-input hover:dark:bg-dark-tremor-background-muted"
            onClick={() => setExtended(!extended)}
          >
            {extended ? 'Ver menos' : 'Ver más'}
          </button>
        </div>
      </Card>
    </>
  );
}