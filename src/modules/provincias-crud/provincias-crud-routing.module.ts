import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvinciasCRUDComponent } from './component/provincias-crud.component';

const routes: Routes = [{ path: '', component: ProvinciasCRUDComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProvinciasCRUDRoutingModule {}
