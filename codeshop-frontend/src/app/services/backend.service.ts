import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  public registerUser(email, password) {
    const url = this.URL + 'register';
    return this.http.post(url, {email, password});
  }
}
