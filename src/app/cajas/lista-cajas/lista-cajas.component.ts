import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';

import { CajaService } from '../Caja.service';


@Component({
  selector: 'app-lista-cajas',
  templateUrl: './lista-cajas.component.html',
  styleUrls: ['./lista-cajas.component.css']
})
export class ListaCajasComponent implements OnInit {

  Cajas: any;

  constructor(private CajaService: CajaService) { }

  ngOnInit() {
    this.getCajasLista();
  }

  getCajasLista() {
    // Use snapshotChanges().map() to store the key
    this.CajaService.getCajasLista().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ id: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(Cajas => {
      this.Cajas = Cajas;
    });
  }

  deleteCajas() {
    this.CajaService.deleteAll();
  }

}
