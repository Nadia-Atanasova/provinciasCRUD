import { Component, OnDestroy, inject } from '@angular/core';
import { ndxDataGridColumn } from 'src/app/shared/components/grid/models/columns/ndx-data-grid-column.model';
import { ProvinciasCRUDService } from '../services/provincias-crud.service';
import { PROVINCIASCOLUMNS } from '../consts/grid/provincias/columns/provincias-columns.consts';
import { ndxDataGrid } from 'src/app/shared/components/grid/models/options/ndx-data-grid.model';
import {
  PROVINCIASOPTIONS,
  PROVINCIAS_CRUD_KEY,
  PROVINCIAS_CRUD_URL,
} from '../consts/grid/provincias/options/provincias-options.consts';
import { dxCustomStore } from 'src/app/shared/services/datasource.store';
import { Row } from 'devextreme/ui/data_grid';

@Component({
  selector: 'app-provincias-crud',
  templateUrl: './provincias-crud.component.html',
  styleUrls: ['./provincias-crud.component.css'],
})
export class ProvinciasCRUDComponent implements OnDestroy {
  readonly #provinciasService = inject(ProvinciasCRUDService);
  protected dsProvincias: dxCustomStore.DataServiceStore =
    dxCustomStore.DS.generateDS(
      this.#provinciasService,
      PROVINCIAS_CRUD_KEY,
      PROVINCIAS_CRUD_URL
    );
  options: Partial<ndxDataGrid> = PROVINCIASOPTIONS;
  columns: Partial<ndxDataGridColumn>[] = PROVINCIASCOLUMNS;
  currentRow: Row;

  constructor() {}

  ngOnDestroy(): void {
    this.dsProvincias.dispose();
  }
}
