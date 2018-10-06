import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private dbPath = '/clientes';
  clientesRef: AngularFireList<Cliente> = null;

  constructor(private db: AngularFireDatabase) {
    this.clientesRef = db.list(this.dbPath);
  }

  crearCliente(cliente: Cliente): void {
    this.clientesRef.push(cliente);
  }

  updateCliente(id: string, value: any): void {
    this.clientesRef.update(id, value).catch(error => this.handleError(error));
  }

  deleteCliente(id: string): void {
    this.clientesRef.remove(id).catch(error => this.handleError(error));
  }

  getClientesLista(): AngularFireList<Cliente> {
    return this.clientesRef;
  }

  deleteAll(): void {
    this.clientesRef.remove().catch(error => this.handleError(error));
  }

  private handleError(error) {
    console.log(error);
  }

}
