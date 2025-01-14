import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addingtable',
  templateUrl: './adding-table.component.html',
  styleUrls: ['./adding-table.component.css']
})
export class AddingTableComponent {
  tableName: string = '';
  tablePeople: number | null = null;

  constructor(private router: Router) {}

  addTable() {
    if (this.tableName && this.tablePeople) {
      // Salva i dati nel localStorage
      const tables = JSON.parse(localStorage.getItem('tables') || '[]');
      tables.push({
        name: this.tableName,
        people: this.tablePeople,
        amount: 0 // Puoi gestire l'importo separatamente
      });
      localStorage.setItem('tables', JSON.stringify(tables));

      // Naviga automaticamente alla home
      this.router.navigateByUrl('/');
    }
  }
}
