import { Component, OnInit, Input } from '@angular/core';

import { Producto } from '../producto';
import { ProductoService } from '../producto.service';


@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  @Input() producto: Producto;
  actualizar = false;
  errornombre = false;
  errorprecio = false;
  nombreAnterior = "";
  precioAnterior = 0;
  descripcionAnterior = "";

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
  }

  deleteProducto() {
    this.productoService.deleteProducto(this.producto.id);
  }

  errorNombre() {
    if (!this.producto.nombre){
      this.errornombre = true;
      return true;
    }
    this.errornombre = false;
    return false;
  }

  errorPrecio(){
    if (!this.producto.precio){
      this.errorprecio = true;
      return true;
    }
    this.errorprecio = false;
    return false;
  }

  hasErrores(){
    if (this.errorNombre() || this.errorPrecio()){
      this.producto.precio = this.precioAnterior;
      this.producto.nombre = this.nombreAnterior;
      return true;
    }
    return false;
  }

  onSubmit() {
    if (!this.hasErrores()) {
      this.productoService.updateProducto(this.producto.id, this.producto);
      this.actualizar = false;
    }
  }

  updateProducto() {
    this.nombreAnterior = this.producto.nombre;
    this.descripcionAnterior = this.producto.descripcion;
    this.precioAnterior = this.producto.precio;
    this.actualizar = true;
  }

  deshacer(){
    this.producto.precio = this.precioAnterior;
    this.producto.nombre = this.nombreAnterior;
    this.producto.descripcion = this.descripcionAnterior;
    this.actualizar = false;
    this.errornombre = false;
    this.errorprecio = false;
  }


}
