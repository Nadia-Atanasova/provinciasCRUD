import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gridModule } from 'src/app/shared/components/grid/grid.module';
import { ProvinciasCRUDRoutingModule } from './provincias-crud-routing.module';
import { ProvinciasCRUDComponent } from './component/provincias-crud.component';
import { ProvinciasCRUDService } from './services/provincias-crud.service';
import {
  DxButtonModule,
  DxNumberBoxModule,
  DxTemplateModule,
  DxTextBoxModule,
} from 'devextreme-angular';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ProvinciasCRUDComponent],
  imports: [
    CommonModule,
    ProvinciasCRUDRoutingModule,
    gridModule,
    DxButtonModule,
    DxTemplateModule,
    DxTextBoxModule,
    DxNumberBoxModule,
    SharedModule,
  ],
  providers: [ProvinciasCRUDService],
})
export class ProvinciasCRUDModule {}
