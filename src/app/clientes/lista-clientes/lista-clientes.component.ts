import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  clientes: any;
  cargando: boolean;

  constructor(private clienteService: ClienteService) {
    this.cargando = true;
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
      if (this.clientes){
        this.cargando = false;
      }
    });
  }

  deleteClientes() {
    this.clienteService.deleteAll();
  }

}
