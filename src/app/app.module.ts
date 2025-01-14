import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AddingTableComponent } from './pages/adding-table/adding-table.component';
import { FormsModule } from '@angular/forms';
import { InformationTableComponent } from './pages/information-table/information-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddingTableComponent,
    InformationTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
