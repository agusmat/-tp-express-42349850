import { Empresa } from './../../app/models/empresa';
export class Mensaje {
    _id: string;
    para: string;
    desde: string;
    texto: string;
    fecha: Date;
    empresa: Empresa;

    Mensaje(id?: string, para?: string, desde?: string, texto?: string, fecha?: Date, empresa?: Empresa) {
        this.para = para;
        this.desde = desde;
        this.texto = texto;
        this.fecha = fecha;
        this.empresa = new Empresa();
    }
}
