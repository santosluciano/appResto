import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';

import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productos: any;

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.getProductosLista();
  }

  getProductosLista() {
    // Use snapshotChanges().map() to store the key
    this.productoService.getProductosLista().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ id: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(productos => {
      this.productos = productos;
    });
  }

  deleteProductos() {
    this.productoService.deleteAll();
  }

}
