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
  bottles: number = 0;
  glasses: number = 0;
  afterDinner: number = 0;
  selectedBottle: string = '';
  wines: string[] = ['ROSSO CONERO', 'FIBBIO', 'SOLOSARA', 'LA FLEUR', 'COLLEBOLLE', 'ACQUA'];
  totalAmount: number = 0;
  isClosed: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.tableIndex = +params['id'];
      const tables = JSON.parse(localStorage.getItem('tables') || '[]');
      this.table = tables[this.tableIndex];

      // Carica i dati del tavolo
      this.bottles = this.table.bottles || 0;
      this.glasses = this.table.glasses || 0;
      this.afterDinner = this.table.afterDinner || 0;
      this.selectedBottle = this.table.selectedBottle || '';
      this.totalAmount = this.table.totalAmount || 0;
      this.isClosed = this.table.isClosed || false; // Verifica se il tavolo è chiuso
    });
  }

  // Disabilita tutte le modifiche se il tavolo è chiuso
  increaseBottles() {
    if (!this.isClosed) this.bottles++;
    this.updateTotal();
  }

  decreaseBottles() {
    if (!this.isClosed && this.bottles > 0) this.bottles--;
    this.updateTotal();
  }

  increaseGlasses() {
    if (!this.isClosed) this.glasses++;
    this.updateTotal();
  }

  decreaseGlasses() {
    if (!this.isClosed && this.glasses > 0) this.glasses--;
    this.updateTotal();
  }

  increaseAfterDinner() {
    if (!this.isClosed) this.afterDinner++;
  }

  decreaseAfterDinner() {
    if (!this.isClosed && this.afterDinner > 0) this.afterDinner--;
  }

  updateTotal() {
    if (this.isClosed) return;

    // Calcola il costo delle bottiglie
    let bottleCost = 0;
    switch (this.selectedBottle) {
      case 'ROSSO CONERO':
      case 'SOLOSARA':
      case 'LA FLEUR':
      case 'COLLEBOLLE':
        bottleCost = 8;
        break;
      case 'FIBBIO':
        bottleCost = 12.5;
        break;
      case 'ACQUA':
        bottleCost = 1;
        break;
    }
    const bottlesTotal = this.bottles * bottleCost;

    // Calcola il costo dei calici
    const glassesTotal = this.glasses * 5;

    // Aggiorna il totale
    this.totalAmount = bottlesTotal + glassesTotal;
  }

  saveChanges() {
    if (this.isClosed) return; // Non salva i dati se il tavolo è chiuso

    const tables = JSON.parse(localStorage.getItem('tables') || '[]');
    tables[this.tableIndex] = {
      ...this.table,
      bottles: this.bottles,
      glasses: this.glasses,
      afterDinner: this.afterDinner,
      selectedBottle: this.selectedBottle,
      totalAmount: this.totalAmount
    };
    localStorage.setItem('tables', JSON.stringify(tables));
    this.router.navigate(['/']);
  }
}
