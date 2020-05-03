import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//import { AngularMaterialModule } from ''; //angular material tools for browser
//import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaserviceComponent } from './components/spaservice/spaservice.component';
import { AddspaserviceComponent } from './components/addspaservice/addspaservice.component';
import { DeletespaserviceComponent } from './components/deletespaservice/deletespaservice.component';

/* Angular 8 CRUD services */
import { ApiService } from './shared/api.service';


@NgModule({
  declarations: [
    AppComponent,
    SpaserviceComponent,
    AddspaserviceComponent,
    DeletespaserviceComponent
    //AngularMaterialModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  //schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
