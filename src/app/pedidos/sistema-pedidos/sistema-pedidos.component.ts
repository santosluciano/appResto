import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { MesaService } from '../../mesas/mesa.service';


@Component({
  selector: 'app-sistema-pedidos',
  templateUrl: './sistema-pedidos.component.html',
  styleUrls: ['./sistema-pedidos.component.css']
})
export class SistemaPedidosComponent implements OnInit {

  mesas: any;
  cargando: boolean;
  accion: string;

  constructor(private mesaService: MesaService) {
    this.cargando = true;
  }

  ngOnInit() {
    this.getMesasLista();
  }

  getMesasLista() {
    this.accion = 'pedidos';//aca va pedidos
    this.mesaService.getMesasLista().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ id: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(mesas => {
      this.mesas = mesas;
      if (this.mesas){
        this.cargando = false;
      }
    });
  }

}
