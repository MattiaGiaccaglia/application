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
      // Mostra un'alert per confermare la riapertura
      const confirmation = confirm('Vuoi riaprire il tavolo?');
      if (confirmation) {
        // Riapre il tavolo
        this.tables[index].isClosed = false;
        localStorage.setItem('tables', JSON.stringify(this.tables));
      }
    } else {
      // Mostra un'alert per confermare la chiusura
      const confirmation = confirm('Vuoi chiudere il conto del tavolo?');
      if (confirmation) {
        // Chiude il tavolo
        this.tables[index].isClosed = true;
        localStorage.setItem('tables', JSON.stringify(this.tables));
      }
    }
  }
}
