import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { map } from 'rxjs/operators';

import { Pedido } from '../pedido';
import { Mesa } from '../../mesas/mesa';
import { PedidoService } from '../pedido.service';
import { Cliente } from '../../clientes/cliente';
import { ClienteService } from '../../clientes/cliente.service';

@Component({
  selector: 'app-crear-pedido',
  templateUrl: './crear-pedido.component.html',
  styleUrls: ['./crear-pedido.component.css']
})
export class CrearPedidoComponent implements OnInit {

  pedido: Pedido = new Pedido();
  @Input() mesa: Mesa;
  clientes: any;
  closeResult: string;


  constructor(private pedidoService: PedidoService, private clienteService: ClienteService) {
    this.pedido = new Pedido();
  }

  ngOnInit() {
    this.getClientesLista();
  }

  getClientesLista() {
    // Use snapshotChanges().map() to store the key
    this.clienteService.getClientesLista().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ id: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(clientes => {
      this.clientes = clientes;
    });
  }

  newPedido(): void {
  }

  salvar() {
  }

  onSubmit() {
    this.salvar();
  }

}
