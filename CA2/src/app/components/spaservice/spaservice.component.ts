import { GetSpaServicesService } from './../../services/get-spa-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spaservice',
  templateUrl: './spaservice.component.html',
  styleUrls: ['./spaservice.component.css']
})
export class SpaserviceComponent implements OnInit {
  spa;

  constructor(private getSpaService: GetSpaServicesService) { }

  ngOnInit(): void {
    this.spa = this.getSpaService.getAll();
  }

}
