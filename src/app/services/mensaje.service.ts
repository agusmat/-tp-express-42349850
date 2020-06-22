import { Injectable } from '@angular/core';
import { Mensaje } from './../models/mensaje'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  mensaje: Mensaje;
  mensajes: Array<Mensaje>;
  api: string = "http://localhost:3000/api/mensaje"
  constructor(private _http: HttpClient) {
    this.mensajes = new Array<Mensaje>();
    this.mensaje = new Mensaje();
  }
  getMensaje(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({})
    }
    return this._http.get(this.api, httpOptions);

  }
  deleteMensaje(men: Mensaje): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({

      })
    };

    return this._http.delete(this.api + '/' + men._id, httpOptions);
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
  addMensaje(men: Mensaje): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    var body = JSON.stringify(men);
    return this._http.post(this.api, body, httpOptions);
  }
  upDateMensaje(men: Mensaje): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    var body = JSON.stringify(men);
    return this._http.put(this.api + '/' + men._id, body, httpOptions);
  }
}
