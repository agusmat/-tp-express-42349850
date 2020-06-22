import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { Punto2Component } from './components/punto2/punto2.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { Punto3Component } from './components/punto3/punto3.component';
import { Punto4Component } from './components/punto4/punto4.component';
import { Punto5Component } from './components/punto5/punto5.component';

import { SliderComponent } from './components/slider/slider.component';
import { FormsModule } from '@angular/forms';
import { NgxDataTableModule } from 'angular-9-datatable';
import { RegistroComponent } from './components/registro/registro.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SliderModule } from 'angular-image-slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    Punto2Component,
    Punto1Component,
    Punto3Component,
    Punto4Component,
    Punto5Component,
    SliderComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDataTableModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
