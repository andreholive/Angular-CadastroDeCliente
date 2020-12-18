import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';
import { catchError, map } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient, private userService: UserService) { }

  create(client: Client): Observable<Client> {
    return this.http.post<Client>(this.baseUrl+'/client', client).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl+'/client').pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readById(id: string): Observable<Client>{
    return this.http.get<Client>(this.baseUrl+'/client/'+id).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Client> {
    const url = `${this.baseUrl}/client/${id}`
    return this.http.delete<Client>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any> {
    if(e.status = 400){
      
    }
    return EMPTY
  }
}
