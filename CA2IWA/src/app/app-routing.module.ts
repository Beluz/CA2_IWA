import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpaserviceComponent } from './components/spaservice/spaservice.component';
import { AddspaserviceComponent} from './components/addspaservice/addspaservice.component';
import { DeletespaserviceComponent } from './components/deletespaservice/deletespaservice.component';



const routes: Routes = [
  { path: '', component: SpaserviceComponent },
  //{ path: 'spaservice', component: SpaserviceComponent },
  { path: '', pathMatch: 'full', redirectTo: 'add-student' },
  { path: 'Addspaservice', component: AddspaserviceComponent },
  { path: 'deletespaservice/:id', component: DeletespaserviceComponent },
  { path: 'spaservice', component: SpaserviceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
