import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaCrearComponent } from './mesa-crear.component';

describe('MesaCrearComponent', () => {
  let component: MesaCrearComponent;
  let fixture: ComponentFixture<MesaCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesaCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
