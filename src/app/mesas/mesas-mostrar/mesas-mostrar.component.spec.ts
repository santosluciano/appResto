import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesasMostrarComponent } from './mesas-mostrar.component';

describe('MesasMostrarComponent', () => {
  let component: MesasMostrarComponent;
  let fixture: ComponentFixture<MesasMostrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesasMostrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesasMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
