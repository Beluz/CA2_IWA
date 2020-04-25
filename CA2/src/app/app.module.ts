import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaserviceComponent } from './components/spaservice/spaservice.component';

/* Angular 8 CRUD services */
import { ApiService } from './shared/api.service';

@NgModule({
  declarations: [
    AppComponent,
    SpaserviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [ApiService]
})
export class AppModule { }
