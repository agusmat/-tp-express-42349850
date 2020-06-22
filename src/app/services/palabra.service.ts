import { Injectable } from '@angular/core';
import { Palabra } from './../models/palabra';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PalabraService {
  palabra: Palabra;
  palabras: Array<Palabra>;
  api: string = "http://localhost:3000/api/palabra"
  constructor(private _http: HttpClient) {
    this.palabras = new Array<Palabra>();
    this.palabra = new Palabra();
  }
  getPalabra(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({})
    }
    return this._http.get(this.api, httpOptions);

  }
  deletePalabra(pal: Palabra): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({

      })
    };

    return this._http.delete(this.api + '/' + pal._id, httpOptions);
  }
  getIdDisponible() {
    //var maxid: number;
    //maxid = 0;
    //for (var i = 0; i < this.asistentes.length; i++) {
    // if (maxid < this.asistentes[i].id) {
    // maxid = this.asistentes[i].id;
    //}
    //}
    //return maxid + 1;
  }
  addPalabra(pal: Palabra): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    var body = JSON.stringify(pal);
    return this._http.post(this.api, body, httpOptions);
  }
  upDatePalabra(pal: Palabra): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    var body = JSON.stringify(pal);
    return this._http.put(this.api + '/' + pal._id, body, httpOptions);
  }
}

