import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Caja } from '../Caja';
import { CajaService } from '../Caja.service';

@Component({
  selector: 'app-abrir-caja',
  templateUrl: './abrir-caja.component.html',
  styleUrls: ['./abrir-caja.component.css']
})
export class AbrirCajaComponent implements OnInit {

  Caja: Caja = new Caja();
  enviado = false;

  constructor(private CajaService: CajaService) { }

  ngOnInit() {
  }

  newCaja(): void {
    this.enviado = false;
    this.Caja = new Caja();
  }

  salvar() {
    this.CajaService.crearCaja(this.Caja);
    this.Caja = new Caja();
  }

  onSubmit() {
    this.enviado = true;
    this.salvar();
  }

}
