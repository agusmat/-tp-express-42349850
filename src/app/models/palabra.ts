export class Palabra {
  ingles: string;
  castellano: string;
  url: string;
  _id: string;

  Palabra(ingles?: string, castellano?: string, url?: string, _id?: string) {
    this.ingles = ingles;
    this.castellano = castellano;
    this.url = url;
    this._id = _id;

  }
}


