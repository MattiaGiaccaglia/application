import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-informationtable',
  templateUrl: './information-table.component.html',
  styleUrls: ['./information-table.component.css']
})
export class InformationTableComponent implements OnInit {
  tableIndex!: number;
  table: any;
  glasses: number = 0;
  afterDinner: number = 0;
  totalAmount: number = 0;
  isClosed: boolean = false;

  // Bottiglie di vino e quantità
  wines: { name: string; price: number; quantity: number }[] = [
    { name: 'ROSSO CONERO', price: 8, quantity: 0 },
    { name: 'FIBBIO', price: 12.5, quantity: 0 },
    { name: 'SOLOSARA', price: 8, quantity: 0 },
    { name: 'LA FLEUR', price: 8, quantity: 0 },
    { name: 'COLLEBOLLE', price: 8, quantity: 0 },
    { name: 'ACQUA', price: 1, quantity: 0 }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.tableIndex = +params['id'];
      const tables = JSON.parse(localStorage.getItem('tables') || '[]');
      this.table = tables[this.tableIndex];
      this.isClosed = this.table.isClosed || false;
      this.glasses = this.table.glasses || 0;
      this.afterDinner = this.table.afterDinner || 0;

      // Carica i dati del vino
      if (this.table.wines) {
        this.wines = this.table.wines;
      }
    });

    this.updateTotal();
  }

  increaseWineQuantity(index: number) {
    if (!this.isClosed) {
      this.wines[index].quantity++;
      this.updateTotal();
    }
  }

  decreaseWineQuantity(index: number) {
    if (!this.isClosed && this.wines[index].quantity > 0) {
      this.wines[index].quantity--;
      this.updateTotal();
    }
  }

  increaseGlasses() {
    if (!this.isClosed) {
      this.glasses++;
      this.updateTotal();
    }
  }

  decreaseGlasses() {
    if (!this.isClosed && this.glasses > 0) {
      this.glasses--;
      this.updateTotal();
    }
  }

  updateTotal() {
    const wineTotal = this.wines.reduce((sum, wine) => sum + wine.price * wine.quantity, 0);
    const glassesTotal = this.glasses * 5;
    this.totalAmount = wineTotal + glassesTotal;
  }

  saveChanges() {
    if (this.isClosed) return;

    const tables = JSON.parse(localStorage.getItem('tables') || '[]');
    tables[this.tableIndex] = {
      ...this.table,
      glasses: this.glasses,
      afterDinner: this.afterDinner,
      wines: this.wines,
      totalAmount: this.totalAmount
    };
    localStorage.setItem('tables', JSON.stringify(tables));
    this.router.navigate(['/']);
  }

  increaseAfterDinner() {
    if (!this.isClosed) this.afterDinner++;
  }

  decreaseAfterDinner() {
    if (!this.isClosed && this.afterDinner > 0) this.afterDinner--;
  }

}
