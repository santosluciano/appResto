import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaPedidosComponent } from './sistema-pedidos.component';

describe('SistemaPedidosComponent', () => {
  let component: SistemaPedidosComponent;
  let fixture: ComponentFixture<SistemaPedidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SistemaPedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemaPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
