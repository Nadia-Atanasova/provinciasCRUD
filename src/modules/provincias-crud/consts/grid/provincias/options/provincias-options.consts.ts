import { EditorPreparingEvent } from 'devextreme/ui/data_grid';
import { ndxDataGrid } from 'src/app/shared/components/grid/models/options/ndx-data-grid.model';

export const PROVINCIAS_CRUD_KEY = 'id_gn_provincias';
export const PROVINCIAS_CRUD_URL = '/ProvinciasCRUD';
/** onEditorPreparing_Provinciasgrid - deshabilitar la modificacion del campo codigo,
 * permitir modificar solo al insertar*/
const onEditorPreparing_Provinciasgrid = ($event: EditorPreparingEvent) => {
  if ($event.parentType === 'dataRow' && $event.dataField === 'codigo') {
    if ($event.row.isNewRow) {
      $event.editorOptions.disabled = false;
    } else {
      $event.editorOptions.disabled = true;
    }
  }
};

export const PROVINCIASOPTIONS: Partial<ndxDataGrid> = {
  keyExpr: PROVINCIAS_CRUD_KEY,
  width: '900',
  height: '800',
  paging: { enabled: true, pageSize: 6 },
  onEditorPreparing: onEditorPreparing_Provinciasgrid,
  editing: {
    mode: 'batch',
    allowAdding: true,
    allowUpdating: true,
    allowDeleting: true,
  },
  showRowsRevertButton: true,
};
