import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Caja } from './caja';

@Injectable({
  providedIn: 'root'
})
export class CajaService {

    private dbPath = '/cajas';
    cajasRef: AngularFireList<Caja> = null;

    constructor(private db: AngularFireDatabase) {
      this.cajasRef = db.list(this.dbPath);
   }

   crearCaja(caja: Caja): void {
     caja.HoraApertura = Date.now();
     this.cajasRef.push(caja);
   }

   updateCaja(id: string, value: any): void {
     this.cajasRef.update(id, value).catch(error => this.handleError(error));
   }

   deleteCaja(id: string): void {
     this.cajasRef.remove(id).catch(error => this.handleError(error));
   }

   getCajasLista(): AngularFireList<Caja> {
     return this.cajasRef;
   }

   deleteAll(): void {
     this.cajasRef.remove().catch(error => this.handleError(error));
   }

   private handleError(error) {
     console.log(error);
   }

}
