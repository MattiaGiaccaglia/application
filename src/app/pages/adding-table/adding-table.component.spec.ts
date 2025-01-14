import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingTableComponent } from './adding-table.component';

describe('AddingTableComponent', () => {
  let component: AddingTableComponent;
  let fixture: ComponentFixture<AddingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddingTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
