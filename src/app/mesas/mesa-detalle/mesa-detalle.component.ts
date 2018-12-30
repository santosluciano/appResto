import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';

import { Mesa } from '../mesa';
import { MesaService } from '../mesa.service';
import { Pedido } from '../../pedidos/pedido';
import { PedidoService } from '../../pedidos/pedido.service';
import { Cliente } from '../../clientes/cliente';
import { ClienteService } from '../../clientes/cliente.service';
import { Producto } from '../../productos/producto';
import { ProductoService } from '../../productos/producto.service';


@Component({
  selector: 'app-mesa-detalle',
  templateUrl: './mesa-detalle.component.html',
  styleUrls: ['./mesa-detalle.component.css']
})
export class MesaDetalleComponent implements OnInit {

  @Input() mesa: Mesa;
  @Input() accion: string;
  closeResult: string;
  numeroActual: number;
  clientes: any;
  idcliente: string = null;
  total: number = 0;
  formaPago:  string = 'contado';
  productos: any;
  productosPedido = [];
  idProducto: string;
  cantidadProducto: number;

  constructor(private mesaService: MesaService,private modalService: NgbModal,
                private pedidoService: PedidoService, private clienteService: ClienteService,
                private productoService: ProductoService) {
  }

  ngOnInit() {
    this.numeroActual = this.mesa.numero;
    if (this.accion == 'pedidos'){
      this.getClientesLista();
      this.getProductosLista();
    }
  }

  agregarProducto() {
    for(let producto of this.productos){
      if (producto.id == this.idProducto){
        this.productosPedido.push({"nombre":producto.nombre,"precio":producto.precio,
                                      "cantidad":this.cantidadProducto});
        this.total += this.cantidadProducto*producto.precio;
      }
    }
  }

  borrarProducto(i){
    this.total -= this.productosPedido[i].cantidad*this.productosPedido[i].precio;
    this.productosPedido.splice(i,1);
  }

  getClientesLista() {
    this.clienteService.getClientesLista().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ id: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(clientes => {
      this.clientes = clientes;
    });
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

  open(content) {
    this.mesa.numero = this.numeroActual;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      if (result == 'actualizarmesa')
        this.actualizar();
      else if (result == 'abrirmesa')
        this.abrirMesa();
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  abrirMesa(){
    let pedido = new Pedido();
    pedido.numero = 1; //hacer funcion para obtener el numero
    pedido.apertura = Date.now();
    pedido.idmesa = this.mesa.id;
    pedido.idcliente = this.idcliente;
    pedido.productos = this.productosPedido; //funcion de carga de productos
    pedido.total = this.total;
    pedido.formaPago = this.formaPago;
    pedido.estado = 'activo';
    this.mesa.estado = "ocupada";
    this.pedidoService.crearPedido(pedido,this.mesa);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  actualizar() {
    if (!this.mesaService.hasNumero(this.mesa.numero)||(this.mesa.numero == this.numeroActual)){
      this.mesaService.updateMesa(this.mesa.id, this.mesa);
      this.numeroActual = this.mesa.numero;
    } else {
      this.mesa.numero = this.numeroActual;
    }
  }

}
