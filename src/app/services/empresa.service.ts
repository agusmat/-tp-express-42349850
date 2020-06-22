import { Injectable } from '@angular/core';
import { Empresa } from './../models/empresa'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  empresa: Empresa;
  empresas: Array<Empresa>;
  api: string = "http://localhost:3000/api/empresa"
  constructor(private _http: HttpClient) {
    this.empresas = new Array<Empresa>();
    this.empresa = new Empresa();
  }
  getEmpresa(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({})
    }
    return this._http.get(this.api, httpOptions);
    //return this.asistentes;
  }

}
