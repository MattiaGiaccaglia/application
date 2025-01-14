import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddingTableComponent } from './pages/adding-table/adding-table.component';
import { InformationTableComponent } from './pages/information-table/information-table.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Rotta per la home
  { path: 'add-table', component: AddingTableComponent },
  { path: 'table/:id', component: InformationTableComponent },
  { path: '**', redirectTo: '' } // Reindirizza le rotte sconosciute alla home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
