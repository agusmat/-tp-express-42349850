export class Asistente {
  _id: string;
  usuario: string;
  nombreOrganizacion: string;
  solicitaConstancia: boolean;
  Asistente(_id?: string, usuario?: string, nombreOrganizacion?: string, solicitaConstancia?: boolean) {
    this._id = _id;
    this.usuario = usuario;
    this.solicitaConstancia = solicitaConstancia;
    this.nombreOrganizacion = nombreOrganizacion;

  }
}
