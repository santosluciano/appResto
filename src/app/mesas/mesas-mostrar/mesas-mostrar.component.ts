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

  constructor(private mesaService: MesaService) { }

  ngOnInit() {
    this.getMesasLista();
  }

  getMesasLista() {
    // Use snapshotChanges().map() to store the key
    this.mesaService.getMesasLista().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ id: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(mesas => {
      this.mesas = mesas;
    });
  }

  deleteMesas() {
    this.mesaService.deleteAll();
  }

}
