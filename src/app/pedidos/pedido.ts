export class Pedido{
  id:string;
  numero: number;
  apertura: number;
  cierre: number;
  idmesa: string;
  idcliente: string;
  productos = {};
  total: number;
  formaPago: string;
  estado: string;
}
