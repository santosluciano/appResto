import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { ListaClientesComponent } from './clientes/lista-clientes/lista-clientes.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { ListaProductosComponent } from './productos/lista-productos/lista-productos.component';
import { AbrirCajaComponent } from './cajas/abrir-caja/abrir-caja.component';
import { ListaCajasComponent } from './cajas/lista-cajas/lista-cajas.component';

const routes: Routes = [
    { path: '', redirectTo: 'clientes', pathMatch: 'full' },
    { path: 'clientes', component: ListaClientesComponent },
    { path: 'agregarCliente', component: CrearClienteComponent },
    { path: 'agregarProducto', component: CrearProductoComponent },
    { path: 'productos', component: ListaProductosComponent },
    { path: 'abrirCaja', component: AbrirCajaComponent },
    { path: 'cajas', component: ListaCajasComponent }
];

@NgModule({
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
