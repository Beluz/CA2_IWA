import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'mongodb+srv://test:ccttestuser@cluster0-ro3tw.mongodb.net/test?retryWrites=true&w=majority/users';

@Injectable({
  providedIn: 'root'
})
export class GetSpaServicesService {

  constructor(
    private http: HttpClient
  ) {   }

  getAll() {
    return this.http.get(baseUrl);
  }

}
