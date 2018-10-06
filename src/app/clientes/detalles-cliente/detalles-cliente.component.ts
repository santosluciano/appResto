import { Component, OnInit, Input } from '@angular/core';

import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-detalles-cliente',
  templateUrl: './detalles-cliente.component.html',
  styleUrls: ['./detalles-cliente.component.css']
})
export class DetallesClienteComponent implements OnInit {

  @Input() cliente: Cliente;
  actualizar = false;
  errornombre = false;
  errortelefono = false;
  nombreAnterior = "";
  direccionAnterior = "";
  telefonoAnterior = "";

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
  }

  deleteCliente() {
    this.clienteService.deleteCliente(this.cliente.id);
  }

  errorNombre() {
    if (!this.cliente.nombre){
      this.errornombre = true;
      return true;
    }
    this.errornombre = false;
    return false;
  }

  errorTelefono(){
    let expresionRegular1=/^([0-9]+){9}$/;
    let expresionRegular2=/\s/;
    if (!this.cliente.telefono){
      this.errortelefono = false;
      return false;
    }
    if(expresionRegular2.test(this.cliente.telefono) || !expresionRegular1.test(this.cliente.telefono) ){
      this.errortelefono = true;
      return true;
    }
    this.errortelefono = false;
    return false;
  }

  hasErrores(){
    if (this.errorNombre() || this.errorTelefono()){
      this.cliente.nombre = this.nombreAnterior;
      this.cliente.direccion = this.direccionAnterior;
      this.cliente.telefono = this.telefonoAnterior;
      return true;
    }
    return false;
  }

  onSubmit() {
    if (!this.hasErrores()) {
      this.clienteService.updateCliente(this.cliente.id, this.cliente);
      this.actualizar = false;
    }
  }

  updateCliente() {
    this.nombreAnterior = this.cliente.nombre;
    this.direccionAnterior = this.cliente.direccion;
    this.telefonoAnterior = this.cliente.telefono;
    this.actualizar = true;
  }

  deshacer(){
    this.cliente.nombre = this.nombreAnterior;
    this.cliente.direccion = this.direccionAnterior;
    this.cliente.telefono = this.telefonoAnterior;
    this.errornombre = false;
    this.errortelefono = false;
    this.actualizar = false;
  }


}
