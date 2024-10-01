import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../interfaces/users.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly http = inject(HttpClient);
  constructor() {}

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>('https://jsonplaceholder.typicode.com/users');
  }
  getUser(id: number): Observable<Users> {
    return this.http.get<Users>(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
  }
}
