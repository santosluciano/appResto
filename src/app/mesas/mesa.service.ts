import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Mesa } from './mesa';

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  private dbPath = '/mesas';
  mesasRef: AngularFireList<Mesa> = null;

  constructor(private db: AngularFireDatabase) {
    this.mesasRef = db.list(this.dbPath);
  }

  crearMesa(mesa: Mesa): void {
    this.mesasRef.push(mesa);
  }

  updateMesa(id: string, value: any): void {
    this.mesasRef.update(id, value).catch(error => this.handleError(error));
  }

  deleteMesa(id: string): void {
    this.mesasRef.remove(id).catch(error => this.handleError(error));
  }

  getMesasLista(): AngularFireList<Mesa> {
    return this.mesasRef;
  }

  deleteAll(): void {
    this.mesasRef.remove().catch(error => this.handleError(error));
  }

  hasNumero(mesaNumero): boolean{
    let mesas;
    if (mesaNumero == 0){
        return false;
    } else {
      this.mesasRef.query.orderByChild("numero").equalTo(mesaNumero).on("child_added", function(snapshot) {
         mesas = snapshot.key;
       });
       return mesas;
    }
  }
  private handleError(error) {
    console.log(error);
  }

}
