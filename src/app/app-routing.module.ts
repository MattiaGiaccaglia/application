import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddingTableComponent } from './pages/adding-table/adding-table.component';
import { InformationTableComponent } from './pages/information-table/information-table.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Rotta principale (home)
  { path: 'add-table', component: AddingTableComponent }, // Rotta per aggiungere un tavolo
  { path: 'table/:id', component: InformationTableComponent }, // Rotta per le informazioni del tavolo
  { path: '**', redirectTo: '' } // Rotta di fallback
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
