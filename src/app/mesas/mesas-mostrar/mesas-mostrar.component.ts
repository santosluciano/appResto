import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { MesaService } from '../mesa.service';

@Component({
  selector: 'app-mesas-mostrar',
  templateUrl: './mesas-mostrar.component.html',
  styleUrls: ['./mesas-mostrar.component.css']
})
export class MesasMostrarComponent implements OnInit {

  mesas: any;
  editar: false;
  cargando: boolean;
  accion: string;

  constructor(private mesaService: MesaService) {
    this.cargando = true;
  }

  ngOnInit() {
    this.getMesasLista();
  }

  getMesasLista() {
    this.accion = 'mostrar';
    this.mesaService.getMesasLista().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ id: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(mesas => {
      this.mesas = mesas;
      if (this.mesas){
        this.cargando = false;
      }
    });
  }

  deleteMesas() {
    this.mesaService.deleteAll();
  }

}
