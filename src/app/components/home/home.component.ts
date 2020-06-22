import { Component, OnInit } from '@angular/core';
import { Mensaje } from './../../models/mensaje';
import { Empresa } from './../../models/empresa';
import { MensajeService } from './../../services/mensaje.service';
import { EmpresaService } from './../../services/empresa.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  empresas: Array<Empresa>;
  mensaje: Mensaje;
  tamMaxTex: number = 15;
  tamTex: number;
  mensajes: Array<Mensaje>;
  empresa: Empresa;

  constructor(private mensajeService: MensajeService, private empresaService: EmpresaService) {
    this.obtenerEmpresa();
    this.mensaje = new Mensaje();
    this.mensajes = new Array<Mensaje>();
    this.empresas = new Array<Empresa>();
    this.empresa = new Empresa();
  }



  cambiarTamTexto() {
    this.tamTex = this.mensaje.texto.length;
    console.log(this.tamTex);
  }
  obtenerEmpresa() {
    //this.asistentes = this.asistenteService.getAsistente();
    this.empresas = new Array<Empresa>();
    var emp: Empresa = new Empresa();
    this.empresaService.getEmpresa().subscribe(
      (result) => {
        result.forEach(element => {
          Object.assign(emp, element);
          this.empresas.push(emp);
          emp = new Empresa();
        });
      },
      (error) => {
        console.log("Error");

      }
    )
  }
  enviarMensaje() {
    this.mensaje.fecha = new Date();
    this.mensajeService.addMensaje(this.mensaje).subscribe(

      (result) => {
        alert("Guardado");


      },
      (error) => {
        console.log("Error");

      }
    )

    this.obtenerMensaje();
    this.mensaje = new Mensaje();
    console.log(this.mensajes);



  }
  guardarMensaje() {
    this.mensaje.fecha = new Date();
    this.mensajeService.addMensaje(this.mensaje);
    this.mensaje = new Mensaje();
    this.obtenerMensaje();
  }
  borrarMensaje(men: Mensaje) {

    this.mensajeService.deleteMensaje(men).subscribe(
      (result) => {
        alert("Eliminado");

      },
      (error) => {
        console.log("Error");

      }
    )
    this.obtenerMensaje();
  }
  obtenerMensaje() {
    //this.asistentes = this.asistenteService.getAsistente();
    this.mensajes = new Array<Mensaje>();
    var men: Mensaje = new Mensaje();
    this.mensajeService.getMensaje().subscribe(
      (result) => {
        result.forEach(element => {
          Object.assign(men, element);
          this.mensajes.push(men);
          men = new Mensaje();
        });
      },
      (error) => {
        console.log("Error");

      }
    )
  }

  modificarMensaje() {
    this.mensaje.fecha = new Date();
    this.mensajeService.upDateMensaje(this.mensaje).subscribe(

      (result) => {
        alert("Guardado");


      },
      (error) => {
        console.log("Error");

      }
    )

    this.obtenerMensaje();
    this.mensaje = new Mensaje();


  }
  limpiarAsistente() {
    this.mensaje = new Mensaje();
  }
  elegirAsistente(men: Mensaje) {
    this.mensaje = men;
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  onSubmit(form: NgForm) {
    form.resetForm();

  }

  ngOnInit(): void {


  }
}