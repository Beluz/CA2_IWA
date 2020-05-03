import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'mongodb+srv://test:<password>@cluster0-ro3tw.mongodb.net/test?retryWrites=true&w=majority';
// https://jsonplaceholder.typicode.com/albums';

@Injectable({
  providedIn: 'root'
})
export class GetSpaServicesService {

  constructor(private http: HttpClient) {   }

  getAll() {
    return this.http.get(baseUrl);
  }

}
