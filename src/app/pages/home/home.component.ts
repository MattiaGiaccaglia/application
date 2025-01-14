import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tables: { name: string; people: number; totalAmount: number; isClosed?: boolean }[] = [];

  ngOnInit() {
    // Carica i tavoli dal localStorage
    this.tables = JSON.parse(localStorage.getItem('tables') || '[]');
  }

  toggleTableState(index: number) {
    const table = this.tables[index];

    if (table.isClosed) {
      const confirmation = confirm('Vuoi riaprire il tavolo?');
      if (confirmation) {
        this.tables[index].isClosed = false;
        localStorage.setItem('tables', JSON.stringify(this.tables));
      }
    } else {
      const confirmation = confirm('Vuoi chiudere il conto del tavolo?');
      if (confirmation) {
        this.tables[index].isClosed = true;
        localStorage.setItem('tables', JSON.stringify(this.tables));
      }
    }
  }

  removeAllTables() {
    const confirmation = confirm('Sei sicuro di voler rimuovere tutti i tavoli?');
    if (confirmation) {
      this.tables = [];
      localStorage.removeItem('tables'); // Rimuove tutti i tavoli dal localStorage
    }
  }
}
