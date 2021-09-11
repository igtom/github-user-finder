import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserFinderService {
  constructor(private http: HttpClient) {}

  URL: string = 'https://api.github.com/users';

  getUser(name): Observable<any> {
    return this.http.get(`${this.URL}/${name}`);
  }
}
