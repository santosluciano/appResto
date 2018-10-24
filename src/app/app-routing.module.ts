import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { ListaClientesComponent } from './clientes/lista-clientes/lista-clientes.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { ListaProductosComponent } from './productos/lista-productos/lista-productos.component';
import { AbrirCajaComponent } from './cajas/abrir-caja/abrir-caja.component';
import { ListaCajasComponent } from './cajas/lista-cajas/lista-cajas.component';
import { MesasMostrarComponent } from './mesas/mesas-mostrar/mesas-mostrar.component';
import { MesaCrearComponent } from './mesas/mesa-crear/mesa-crear.component';
import { SistemaPedidosComponent } from './pedidos/sistema-pedidos/sistema-pedidos.component';


const routes: Routes = [
    { path: '', redirectTo: 'pedidos', pathMatch: 'full' },
    { path: 'clientes', component: ListaClientesComponent },
    { path: 'agregarCliente', component: CrearClienteComponent },
    { path: 'agregarProducto', component: CrearProductoComponent },
    { path: 'productos', component: ListaProductosComponent },
    { path: 'abrirCaja', component: AbrirCajaComponent },
    { path: 'cajas', component: ListaCajasComponent },
    { path: 'mesas', component: MesasMostrarComponent },
    { path: 'crearMesa', component: MesaCrearComponent },
    { path: 'pedidos', component: SistemaPedidosComponent }
];

@NgModule({
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
