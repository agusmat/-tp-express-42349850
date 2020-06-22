import { Injectable } from '@angular/core';
import { Asistente } from './../models/asistente'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsistenteService {
  asistente: Asistente;
  asistentes: Array<Asistente>;
  api: string = "http://localhost:3000/api/asistente"
  constructor(private _http: HttpClient) {
    this.asistentes = new Array<Asistente>();
    this.asistente = new Asistente();
  }
  getAsistente(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({})
    }
    return this._http.get(this.api, httpOptions);
    //return this.asistentes;
  }
  deleteAsistente(as: Asistente): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({

      })
    };

    return this._http.delete(this.api + '/' + as._id, httpOptions);
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
  addAsistente(as: Asistente): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    var body = JSON.stringify(as);
    return this._http.post(this.api, body, httpOptions);
  }
  upDateAsistente(as: Asistente): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    var body = JSON.stringify(as);
    return this._http.put(this.api + '/' + as._id, body, httpOptions);
  }
}
