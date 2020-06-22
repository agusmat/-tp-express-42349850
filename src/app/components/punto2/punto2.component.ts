import { Component, OnInit } from '@angular/core';
import { Asistente } from './../../models/asistente';
import { AsistenteService } from './../../services/asistente.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css'],
})
export class Punto2Component implements OnInit {
  asistente: Asistente;
  asistentes: Array<Asistente>;

  constructor(private asistenteService: AsistenteService) {
    this.obtenerAsistente();
    this.asistente = new Asistente();
    this.asistentes = new Array<Asistente>();
   
  }
  enviarAsistente() {
    console.log(this.asistente);
    this.asistenteService.addAsistente(this.asistente).subscribe(

      (result) => {
        alert("Guardado");


      },
      (error) => {
        console.log("Error");

      }
    )

    this.asistente = new Asistente();
    console.log(this.asistentes);
    this.obtenerAsistente();
  }
  guardarAsistente() {
    this.asistenteService.addAsistente(this.asistente);
    this.asistente = new Asistente();
    this.obtenerAsistente();
  }
  borrarAsistente(asi: Asistente) {

    this.asistenteService.deleteAsistente(asi).subscribe(
      (result) => {
        alert("Eliminado");

      },
      (error) => {
        console.log("Error");

      }
    )
    this.obtenerAsistente();
  }
  obtenerAsistente() {
    //this.asistentes = this.asistenteService.getAsistente();
    this.asistentes = new Array<Asistente>();
    var asi: Asistente = new Asistente();
    this.asistenteService.getAsistente().subscribe(
      (result) => {
        result.forEach(element => {
          Object.assign(asi, element);
          this.asistentes.push(asi);
          asi = new Asistente();
        });
      },
      (error) => {
        console.log("Error");

      }
    )
  }
  modificarAsistente() {

    this.asistenteService.upDateAsistente(this.asistente).subscribe(

      (result) => {
        alert("Guardado");


      },
      (error) => {
        console.log("Error");

      }
    )

    
    this.asistente = new Asistente();
    this.obtenerAsistente();

  }
  limpiarAsistente() {
    this.asistente = new Asistente();
  }
  elegirAsistente(as: Asistente) {
    this.asistente = as;
  }
  onSubmit(form: NgForm) {
    form.resetForm();

  }

  ngOnInit(): void {

  }
}
