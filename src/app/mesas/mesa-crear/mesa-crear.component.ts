import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Mesa } from '../mesa';
import { MesaService } from '../mesa.service';


@Component({
  selector: 'app-mesa-crear',
  templateUrl: './mesa-crear.component.html',
  styleUrls: ['./mesa-crear.component.css']
})
export class MesaCrearComponent implements OnInit {

  mesa: Mesa = new Mesa();


  constructor(private mesaService: MesaService) { }

  ngOnInit() {
  }

  newMesa(): void {
    this.mesa = new Mesa();
  }

  salvar() {
    this.mesaService.crearMesa(this.mesa);
    this.mesa = new Mesa();
  }

  onSubmit() {
    this.mesa.estado = "inactiva";
    this.mesa.tipo = "cuadrada";
    this.mesa.numero = 0;
    this.salvar();
  }

}
