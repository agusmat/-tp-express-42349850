import { Injectable } from '@angular/core';
import { Palabra } from './../models/palabra';

@Injectable({
  providedIn: 'root',
})
export class PalabraService {
  palabra: Palabra;
  palabras: Array<Palabra>;

  constructor() {}

  deletePasaje(pal: Palabra) {
    var idBorrar = this.palabras.findIndex(
      (item: Palabra) => item.id == pal.id
    );
    this.palabras.splice(idBorrar, 1);
  }
  getIdDisponible() {
    var maxid: number;
    maxid = 0;
    for (var i = 0; i < this.palabras.length; i++) {
      if (maxid < this.palabras[i].id) {
        maxid = this.palabras[i].id;
      }
    }
    return maxid + 1;
  }
  addPasaje(palabra: Palabra) {
    palabra.id = this.getIdDisponible();
    this.palabras.push(palabra);
  }
  upDatePasaje(pal: Palabra) {
    var idBorrar = this.palabras.findIndex(
      (item: Palabra) => item.id == pal.id
    );

    this.palabras.splice(idBorrar, 1, pal);
  }
}
