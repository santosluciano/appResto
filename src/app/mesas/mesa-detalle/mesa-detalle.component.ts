import { Component, OnInit, Input } from '@angular/core';

import { Mesa } from '../mesa';
import { MesaService } from '../mesa.service';

@Component({
  selector: 'app-mesa-detalle',
  templateUrl: './mesa-detalle.component.html',
  styleUrls: ['./mesa-detalle.component.css']
})
export class MesaDetalleComponent implements OnInit {

  @Input() mesa: Mesa;

  constructor(private mesaService: MesaService) {
  }

  ngOnInit() {
  }

  onSubmit() {
      this.mesaService.updateMesa(this.mesa.id, this.mesa);
  }

}
