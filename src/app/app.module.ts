import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

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
    AbrirCajaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireDatabaseModule // for database
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
