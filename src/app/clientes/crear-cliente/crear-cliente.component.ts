import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';



@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  cliente: Cliente = new Cliente();
  enviado = false;
  errornombre = false;
  errortelefono = false;

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
  }

  newCliente(): void {
    this.enviado = false;
    this.errornombre = false;
    this.errortelefono = false;
    this.cliente = new Cliente();
  }

  salvar() {
    this.clienteService.crearCliente(this.cliente);
    this.cliente = new Cliente();
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
      this.cliente.nombre = this.cliente.nombre;
      this.cliente.telefono = this.cliente.telefono;
      return true;
    }
    return false;
  }

  onSubmit() {
    this.enviado = !this.hasErrores();
    if (this.enviado)
      this.salvar();
  }


}
