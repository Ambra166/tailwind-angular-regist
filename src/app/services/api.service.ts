import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',  // You can also provide it at the component level if needed
})
export class ApiService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';  // Replace with your actual API endpoint

  constructor(private http: HttpClient) { }

  registerUser(data: any): Observable<any> {
    // Simulate a post API call
    return this.http.post<any>(this.apiUrl, data);
  }
}

