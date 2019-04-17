import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl: string = 'https://angularapp2019.azurewebsites.net/api/home';

  constructor(private http: HttpClient) {
  }

  getData() {
    return this.http.get(this.apiUrl);
  } 
}