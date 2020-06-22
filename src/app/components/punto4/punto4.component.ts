import { Component, OnInit } from '@angular/core';
import { Palabra } from './../../models/palabra';
import { PalabraService } from 'src/app/services/palabra.service';




@Component({
  selector: 'app-punto4',
  templateUrl: './punto4.component.html',
  styleUrls: ['./punto4.component.css'],
})
export class Punto4Component implements OnInit {
  ingles: String;
  url: String;
  palabra: Palabra;
  palabras: Array<Palabra>;
  arrayPalabraIngles: Array<String>;
  arrayPalabraUsuario: Array<String>;
  indicePalabraActual: number;
  longitudPalabraActual: number;
  letra0: string;
  letra1: string;
  letra2: string;
  letra3: string;
  letra4: string;
  letra5: string;
  letra6: string;
  letra7: string;
  letra8: string;
  letraPal: Array<any>;
  random: number;
  vidas: number;
  i: number;
  recorrido0: boolean;
  recorrido1: boolean;
  recorrido2: boolean;
  recorrido3: boolean;
  recorrido4: boolean;
  recorrido5: boolean;
  recorrido6: boolean;
  recorrido7: boolean;
  recorrido8: boolean;
  control: boolean;
  constructor(private palabrasService: PalabraService) {
    this.obtenerPalabras();
    this.iniciarJuego();
  }
  obtenerPalabras() {
    this.palabras = new Array<Palabra>();
    var pal: Palabra = new Palabra();
    this.palabrasService.getPalabra().subscribe(
      (result) => {
        result.forEach(element => {
          Object.assign(pal, element);
          this.palabras.push(pal);
          pal = new Palabra();
          console.log(this.palabras)
        });
      },
      (error) => {
        console.log("Error");

      }
    )
  }
  iniciarJuego() {
    this.letra0 = "";
    this.letra1 = "";
    this.letra2 = "";
    this.letra3 = "";
    this.letra4 = "";
    this.letra5 = "";
    this.letra6 = "";
    this.letra7 = "";
    this.letra8 = "";
    this.recorrido0 = true;
    this.recorrido1 = true;
    this.recorrido2 = true;
    this.recorrido3 = true;
    this.recorrido4 = true;
    this.recorrido5 = true;
    this.recorrido6 = true;
    this.recorrido7 = true;
    this.recorrido8 = true;
    this.control = false;
    this.vidas = 6;
    this.indicePalabraActual = this.getRandomNumberBetween(0, 9);
    this.palabra = this.palabras[this.indicePalabraActual];

    try {
      this.longitudPalabraActual = this.palabra.ingles.length;

    } catch (error) {
      console.log(error);
    };
    // this.arrayPalabraIngles = this.palabra.ingles.split(" ");
    // var palabraUsuario = this.palabra.ingles;
    // palabraUsuario = palabraUsuario.replace(/./gi, ' ');
    // this.arrayPalabraUsuario = palabraUsuario.split(" ");
    console.log(this.arrayPalabraIngles);
    console.log(this.arrayPalabraUsuario);
  }
  ponerLetra() {
    console.log("cambiado");
    console.log(this.arrayPalabraUsuario.join(""));
    console.log(this.arrayPalabraIngles.join(""));
    this.arrayPalabraUsuario[0] = this.letra0;
    this.arrayPalabraUsuario[1] = this.letra1;
    this.arrayPalabraUsuario[2] = this.letra2;
    this.arrayPalabraUsuario[3] = this.letra3;
    this.arrayPalabraUsuario[4] = this.letra4;
    this.arrayPalabraUsuario[5] = this.letra5;
    this.arrayPalabraUsuario[6] = this.letra6;
    this.arrayPalabraUsuario[7] = this.letra7;
    this.arrayPalabraUsuario[8] = this.letra8;
    if (this.arrayPalabraUsuario.join("") == this.arrayPalabraIngles.join("")) {
      alert("Palabra correcta!");
      this.cambiarSiguientePalabra();
    }
    else {
      if (this.arrayPalabraIngles[0] != this.arrayPalabraUsuario[0] && this.arrayPalabraUsuario[0] != "" && this.recorrido0 == true) {
        this.vidas = this.vidas - 1;
        alert("Letra Incorrecta");
      }
      else {
        if (this.arrayPalabraIngles[0] == this.arrayPalabraUsuario[0] && this.arrayPalabraUsuario[0] != "" && this.recorrido0 == true) {
          alert("Letra correcta!");
          this.recorrido0 = false;
        }
      }
      if (this.arrayPalabraIngles[1] != this.arrayPalabraUsuario[1] && this.arrayPalabraUsuario[1] != "" && this.recorrido1 == true) {
        this.vidas = this.vidas - 1;
        alert("Letra Incorrecta");
      }
      else {
        if (this.arrayPalabraIngles[1] == this.arrayPalabraUsuario[1] && this.arrayPalabraUsuario[1] != "" && this.recorrido1 == true) {
          alert("Letra correcta!");
          this.recorrido1 = false;
        }
      }
      if (this.arrayPalabraIngles[2] != this.arrayPalabraUsuario[2] && this.arrayPalabraUsuario[2] != "" && this.recorrido2 == true) {
        this.vidas = this.vidas - 1

        alert("Letra Incorrecta");
      }
      else {
        if (this.arrayPalabraIngles[2] == this.arrayPalabraUsuario[2] && this.arrayPalabraUsuario[2] != "" && this.recorrido2 == true) {
          alert("Letra correcta!");
          this.recorrido2 = false;
        }
      }
      if (this.arrayPalabraIngles[3] != this.arrayPalabraUsuario[3] && this.arrayPalabraUsuario[3] != "" && this.recorrido3 == true) {
        this.vidas = this.vidas - 1
        alert("Letra Incorrecta");
      }
      else {
        if (this.arrayPalabraIngles[3] == this.arrayPalabraUsuario[3] && this.arrayPalabraUsuario[3] != "" && this.recorrido3 == true) {
          alert("Letra correcta!");
          this.recorrido3 = false;
        }
      }
      if (this.arrayPalabraIngles[4] != this.arrayPalabraUsuario[4] && this.arrayPalabraUsuario[4] != "" && this.recorrido4 == true) {
        this.vidas = this.vidas - 1

        alert("Letra Incorrecta");
      }
      else {
        if (this.arrayPalabraIngles[4] == this.arrayPalabraUsuario[4] && this.arrayPalabraUsuario[4] != "" && this.recorrido4 == true) {
          alert("Letra correcta!");
          this.recorrido4 = false;
        }
      }
      if (this.arrayPalabraIngles[5] != this.arrayPalabraUsuario[5] && this.arrayPalabraUsuario[5] != "" && this.recorrido5 == true) {
        this.vidas = this.vidas - 1

        alert("Letra Incorrecta");
      }
      else {
        if (this.arrayPalabraIngles[5] == this.arrayPalabraUsuario[5] && this.arrayPalabraUsuario[5] != "" && this.recorrido5 == true) {
          alert("Letra correcta!");
          this.recorrido5 = false;
        }
      }
      if (this.arrayPalabraIngles[6] != this.arrayPalabraUsuario[6] && this.arrayPalabraUsuario[6] != "" && this.recorrido6 == true) {
        this.vidas = this.vidas - 1
        alert("Letra Incorrecta");
      }
      else {
        if (this.arrayPalabraIngles[6] == this.arrayPalabraUsuario[6] && this.arrayPalabraUsuario[6] != "" && this.recorrido6 == true) {
          alert("Letra correcta!");
          this.recorrido6 = false;
        }
      }
      if (this.arrayPalabraIngles[7] != this.arrayPalabraUsuario[7] && this.arrayPalabraUsuario[7] != "" && this.recorrido7 == true) {
        this.vidas = this.vidas - 1
        alert("Letra Incorrecta");
      }
      else {
        if (this.arrayPalabraIngles[7] == this.arrayPalabraUsuario[7] && this.arrayPalabraUsuario[7] != "" && this.recorrido7 == true) {
          alert("Letra correcta!");
          this.recorrido7 = false;
        }
      }
      if (this.arrayPalabraIngles[8] != this.arrayPalabraUsuario[8] && this.arrayPalabraUsuario[8] != "" && this.recorrido8 == true) {
        this.vidas = this.vidas - 1
        alert("Letra Incorrecta");
      }
      else {
        if (this.arrayPalabraIngles[8] == this.arrayPalabraUsuario[8] && this.arrayPalabraUsuario[8] != "" && this.recorrido8 == true) {
          alert("Letra correcta!");
          this.recorrido8 = false;
        }
      }
      if (this.vidas == 0) {
        alert("Perdiste! Reiniciando el juego");
        this.iniciarJuego();
      }
    }
  }

  cambiarSiguientePalabra() {
    this.letra0 = "";
    this.letra1 = "";
    this.letra2 = "";
    this.letra3 = "";
    this.letra4 = "";
    this.letra5 = "";
    this.letra6 = "";
    this.letra7 = "";
    this.letra8 = "";
    this.recorrido0 = true;
    this.recorrido1 = true;
    this.recorrido2 = true;
    this.recorrido3 = true;
    this.recorrido4 = true;
    this.recorrido5 = true;
    this.recorrido6 = true;
    this.recorrido7 = true;
    this.recorrido8 = true;
    if (this.indicePalabraActual != 9) {
      this.indicePalabraActual = this.indicePalabraActual + 1;
    }
    else {
      this.indicePalabraActual = 0;
    }
    this.palabra = this.palabras[this.indicePalabraActual];
    this.longitudPalabraActual = this.palabra.ingles.length;
    this.arrayPalabraIngles = this.palabra.ingles.split("");
    var palabraUsuario = this.palabra.ingles;
    palabraUsuario = palabraUsuario.replace(/./gi, ' ');
    this.arrayPalabraUsuario = palabraUsuario.split("");
    console.log(this.arrayPalabraIngles);
    console.log(this.arrayPalabraUsuario);
  }
  getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  palabrAleatoria() {
    this.letra0 = "";
    this.letra1 = "";
    this.letra2 = "";
    this.letra3 = "";
    this.letra4 = "";
    this.letra5 = "";
    this.letra6 = "";
    this.letra7 = "";
    this.letra8 = "";
    this.recorrido0 = true;
    this.recorrido1 = true;
    this.recorrido2 = true;
    this.recorrido3 = true;
    this.recorrido4 = true;
    this.recorrido5 = true;
    this.recorrido6 = true;
    this.recorrido7 = true;
    this.recorrido8 = true;
    this.control = false;
    this.vidas = 6;
    this.indicePalabraActual = this.getRandomNumberBetween(0, 9);
    this.palabra = this.palabras[this.indicePalabraActual];
    this.longitudPalabraActual = this.palabra.ingles.length;
    this.arrayPalabraIngles = this.palabra.ingles.split("");
    var palabraUsuario = this.palabra.ingles;
    palabraUsuario = palabraUsuario.replace(/./gi, ' ');
    this.arrayPalabraUsuario = palabraUsuario.split("");
    console.log(this.arrayPalabraIngles);
    console.log(this.arrayPalabraUsuario);
  }
  ngOnInit(): void { }
}