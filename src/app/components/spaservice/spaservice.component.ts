import { Component, OnInit } from '@angular/core';
//import { GetSpaServicesService } from './../../services/get-spa-services.service';
import { Router } from '@angular/router';
import { ApiService } from './../../shared/api.service';
import { Spaservice } from './../../shared/spaservice';

@Component({
  selector: 'app-spaservice',
  templateUrl: './spaservice.component.html',
  styleUrls: ['./spaservice.component.css']
})

export class SpaserviceComponent implements OnInit {
 //spa;
 spa: any = [];
  //dataSource: MatTableDataSource<Student>;
  //@ViewChild(MatPaginator) paginator: MatPaginator;
  //displayedColumns: string[] = ['_id', 'student_name', 'student_email', 'section', 'action'];


  constructor(private getSpaService: ApiService) {
    //this.getSpaService.GetSpaservices().subscribe(data => {
      //this.spa = data;
      //this.dataSource = new MatTableDataSource<Student>(this.StudentData);
      // setTimeout(() => {
      //   this.dataSource.paginator = this.paginator;
      // }, 0);
    //})
  }



  ngOnInit(): void {
     this.spa = this.getSpaService.GetSpaservices();
  }

}
