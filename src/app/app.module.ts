import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';
import { firebase } from '../environments/firebase';
import { AppComponent } from './app.component';

import { DetallesClienteComponent } from './clientes/detalles-cliente/detalles-cliente.component';
import { ListaClientesComponent } from './clientes/lista-clientes/lista-clientes.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { DetalleProductoComponent } from './productos/detalle-producto/detalle-producto.component';
import { ListaProductosComponent } from './productos/lista-productos/lista-productos.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { DetalleCajaComponent } from './cajas/detalle-caja/detalle-caja.component';
import { ListaCajasComponent } from './cajas/lista-cajas/lista-cajas.component';
import { AbrirCajaComponent } from './cajas/abrir-caja/abrir-caja.component';
import { MesaDetalleComponent } from './mesas/mesa-detalle/mesa-detalle.component';
import { MesasMostrarComponent } from './mesas/mesas-mostrar/mesas-mostrar.component';
import { MesaCrearComponent } from './mesas/mesa-crear/mesa-crear.component';
import { PedidoDetalleComponent } from './pedidos/pedido-detalle/pedido-detalle.component';
import { ListaPedidosComponent } from './pedidos/lista-pedidos/lista-pedidos.component';
import { CrearPedidoComponent } from './pedidos/crear-pedido/crear-pedido.component';
import { SistemaPedidosComponent } from './pedidos/sistema-pedidos/sistema-pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    DetallesClienteComponent,
    ListaClientesComponent,
    CrearClienteComponent,
    DetalleProductoComponent,
    ListaProductosComponent,
    CrearProductoComponent,
    DetalleCajaComponent,
    ListaCajasComponent,
    AbrirCajaComponent,
    MesaDetalleComponent,
    MesasMostrarComponent,
    MesaCrearComponent,
    PedidoDetalleComponent,
    ListaPedidosComponent,
    CrearPedidoComponent,
    SistemaPedidosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireDatabaseModule, // for database
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
