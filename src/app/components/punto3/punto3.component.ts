import { Component, OnInit } from '@angular/core';
import { Pasaje } from './../../models/pasaje';
import { Punto3Service } from 'src/app/services/punto3.service';
import { Adelanto } from 'src/app/models/adelanto';
import { NgForm } from '@angular/forms';
import { AsapScheduler } from 'rxjs/internal/scheduler/AsapScheduler';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css'],
})
export class Punto3Component implements OnInit {
  adelantos: Array<Adelanto>;
  pasaje: Pasaje;
  pasajes: Array<Pasaje>;
  adelanto: Adelanto;

  constructor(private pasajeService: Punto3Service) {
    this.obtenerPasaje();
    this.pasaje = new Pasaje();
    this.pasajes = new Array<Pasaje>();
    this.adelantos = new Array<Adelanto>();
    this.adelanto = new Adelanto();

  }

  eliminarAdelanto(adelanto: Adelanto) {

    var index = this.pasaje.adelanto.findIndex((element) => element._id == adelanto._id)

    this.pasaje.adelanto.splice(index, 1);
    this.modificarPasaje();
    this.obtenerPasaje();

  }


  guardarAdelanto() {

    var montAd: number = 0;
    this.pasaje.adelanto.forEach(element => {
      montAd = element.montoAdelanto + montAd + this.adelanto.montoAdelanto;
      console.log(montAd);
    })
    console.log(this.pasaje.final);
    if (this.pasaje.final > montAd) {

      this.pasaje.adelanto.push(this.adelanto);
      this.adelanto = new Adelanto();
    }
    else {
      alert("El adelanto supera el precio final del pasaje");
    }
  }


  enviarPasaje() {
    this.pasaje.fechaCompra = new Date();
    this.pasajeService.addPasaje(this.pasaje).subscribe(

      (result) => {
        console.log(this.pasaje)
        alert("Guardado");


      },
      (error) => {
        console.log("Error");

      }
    )

    this.obtenerPasaje();
    this.pasaje = new Pasaje();
    console.log(this.pasajes);



  }
  guardarPasaje() {
    this.pasaje.fechaCompra = new Date();
    this.pasajeService.addPasaje(this.pasaje);
    this.pasaje = new Pasaje();
    this.obtenerPasaje();
  }
  borrarPasaje(pas: Pasaje) {

    this.pasajeService.deletePasaje(pas).subscribe(
      (result) => {
        alert("Eliminado");

      },
      (error) => {
        console.log("Error");

      }
    )
    this.obtenerPasaje();
  }
  obtenerPasaje() {
    //this.asistentes = this.asistenteService.getAsistente();
    this.pasajes = new Array<Pasaje>();
    var pas: Pasaje = new Pasaje();
    this.pasajeService.getPasaje().subscribe(
      (result) => {
        result.forEach(element => {
          Object.assign(pas, element);
          this.pasajes.push(pas);
          pas = new Pasaje();
        });
      },
      (error) => {
        console.log("Error");

      }
    )
  }

  modificarPasaje() {
    this.pasaje.fechaCompra = new Date();
    this.pasajeService.upDatePasaje(this.pasaje).subscribe(

      (result) => {
        alert("Guardado");


      },
      (error) => {
        console.log("Error");

      }
    )

    this.obtenerPasaje();
    this.pasaje = new Pasaje();


  }
  limpiarPasaje() {
    this.pasaje = new Pasaje();
  }
  elegirPasaje(men: Pasaje) {
    console.log(men);
    this.pasaje = men;
  }
  onSubmit(form: NgForm) {
    form.resetForm();


  }


  cambio() {
    let a = this.pasaje.precioPasaje;
    let b = this.pasaje.categoriaPasajero;

    if (b == 'Menor') {
      this.pasaje.final = a - (25 * a) / 100;
      console.log(this.pasaje.final);
    } else {
      if (b == 'Jubilado') {
        this.pasaje.final = a - (50 * a) / 100;
        console.log(this.pasaje.final);
      } else {
        this.pasaje.final = a;
        console.log(this.pasaje.final);
      }
    }
  }

  ngOnInit(): void { }
}