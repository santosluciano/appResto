import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Pedido } from './pedido';

import { Mesa } from '../mesas/mesa';
import { MesaService } from '../mesas/mesa.service';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private dbPath = '/pedidos';
  pedidosRef: AngularFireList<Pedido> = null;

  constructor(private db: AngularFireDatabase, private mesaService: MesaService) {
    this.pedidosRef = db.list(this.dbPath);
  }

  crearPedido(pedido: Pedido, mesa: Mesa): any {
    this.pedidosRef.push(pedido).then((snap) => {
      let key = snap.key;
      mesa.estado = 'ocupada';
      mesa.pedidoactivo = key;
      this.mesaService.updateMesa(mesa.id,mesa);
    });
  }

  private handleError(error) {
    console.log(error);
  }

}
