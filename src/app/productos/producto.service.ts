import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private dbPath = '/productos';
  productosRef: AngularFireList<Producto> = null;

  constructor(private db: AngularFireDatabase) {
    this.productosRef = db.list(this.dbPath);
 }

 crearProducto(producto: Producto): void {
   this.productosRef.push(producto);
 }

 updateProducto(id: string, value: any): void {
   this.productosRef.update(id, value).catch(error => this.handleError(error));
 }

 deleteProducto(id: string): void {
   this.productosRef.remove(id).catch(error => this.handleError(error));
 }

 getProductosLista(): AngularFireList<Producto> {
   return this.productosRef;
 }

 deleteAll(): void {
   this.productosRef.remove().catch(error => this.handleError(error));
 }

 private handleError(error) {
   console.log(error);
 }

}
