import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCajasComponent } from './lista-cajas.component';

describe('ListaCajasComponent', () => {
  let component: ListaCajasComponent;
  let fixture: ComponentFixture<ListaCajasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCajasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCajasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
