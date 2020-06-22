import { Adelanto } from './../../app/models/adelanto';
export class Pasaje {
  _id: number;
  dniPasajero: number;
  precioPasaje: number;
  categoriaPasajero: string;
  fechaCompra: Date;
  adelanto: Array<Adelanto> = new Array<Adelanto>();
  final: number;

  Pasaje(dniPasajero?: number,
    precioPasaje?: number,
    categoriaPasajero?: string,
    fechaCompra?: Date,
    adelanto?: Array<Adelanto>,
    _id?: number,
    final?: number
  ) {
    this.dniPasajero = dniPasajero;
    this.precioPasaje = precioPasaje;
    this.categoriaPasajero = categoriaPasajero;
    this.fechaCompra = fechaCompra;
    this.adelanto = adelanto;
    this._id = _id;
    this.final = final;
  }
}
