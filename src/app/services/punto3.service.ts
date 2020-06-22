import { Injectable } from '@angular/core';
import { Pasaje } from './../models/pasaje';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Punto3Service {

  pasaje: Pasaje;
  pasajes: Array<Pasaje>;
  api: string = "http://localhost:3000/api/pasaje"
  constructor(private _http: HttpClient) {
    this.pasajes = new Array<Pasaje>();
    this.pasaje = new Pasaje();
  }
  getPasaje(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({})
    }
    return this._http.get(this.api, httpOptions);

  }
  deletePasaje(pas: Pasaje): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({

      })
    };

    return this._http.delete(this.api + '/' + pas._id, httpOptions);
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
  addPasaje(pas: Pasaje): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    var body = JSON.stringify(pas);
    return this._http.post(this.api, body, httpOptions);
  }
  upDatePasaje(pas: Pasaje): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    var body = JSON.stringify(pas);
    return this._http.put(this.api + '/' + pas._id, body, httpOptions);
  }
}

