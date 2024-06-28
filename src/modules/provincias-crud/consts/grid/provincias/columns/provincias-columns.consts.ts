import { ndxDataGridColumn } from 'src/app/shared/components/grid/models/columns/ndx-data-grid-column.model';

export const PROVINCIASCOLUMNS: Partial<ndxDataGridColumn>[] = [
  {
    name: 'codigo',
    dataField: 'codigo',
    caption: 'examples.provincias.codigo',
    dataType: 'number',
    sortOrder: 'asc',
    validationRules: [{ type: 'required' }],
  },
  {
    name: 'descripcion',
    dataField: 'descripcion',
    caption: 'examples.provincias.descripcion',
    dataType: 'string',
    cssClass: '',
    width: '100',
    validationRules: [
      { type: 'required' },
      { type: 'stringLength', min: 1, max: 40 },
    ],
  },
];
