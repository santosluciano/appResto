import { Component, OnInit, Input } from '@angular/core';

import { Caja } from '../Caja';
import { CajaService } from '../Caja.service';

@Component({
  selector: 'app-detalle-caja',
  templateUrl: './detalle-caja.component.html',
  styleUrls: ['./detalle-caja.component.css']
})
export class DetalleCajaComponent implements OnInit {

  @Input() Caja: Caja;

  constructor(private CajaService: CajaService) { }

  ngOnInit() {
  }

  deleteCaja() {
    this.CajaService.deleteCaja(this.Caja.id);
  }

}
