import { GetSpaServicesService } from './../../services/get-spa-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spaservice',
  templateUrl: './spaservice.component.html',
  styleUrls: ['./spaservice.component.css']
})
export class SpaserviceComponent implements OnInit {
  spaservice;
  constructor(
    private getSpaService: GetSpaServicesService,
  ) { }

  ngOnInit(): void {
    this.spaservice = this.getSpaService.getAll();
  }

}
