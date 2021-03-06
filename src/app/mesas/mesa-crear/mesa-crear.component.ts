import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Mesa } from '../mesa';
import { MesaService } from '../mesa.service';


@Component({
  selector: 'app-mesa-crear',
  templateUrl: './mesa-crear.component.html',
  styleUrls: ['./mesa-crear.component.css']
})
export class MesaCrearComponent implements OnInit {

  @Input() mesa: Mesa;


  constructor(private mesaService: MesaService) { }

  ngOnInit() {
  }

  actualizar() {
    this.mesaService.updateMesa(this.mesa.id,this.mesa);
  }

  onSubmit() {
    this.actualizar();
  }

}
