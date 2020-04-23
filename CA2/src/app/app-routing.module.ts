import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpaserviceComponent } from './components/spaservice/spaservice.component';


const routes: Routes = [
  { path: '', component: SpaserviceComponent },
  { path: 'users/:userId', component: SpaserviceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
