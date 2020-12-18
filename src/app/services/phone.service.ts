import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Phone } from '../models/phone.model';
import { catchError, map } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  create(phone: Phone): Observable<Phone> {
    return this.http.post<Phone>(this.baseUrl+'/phone', phone).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any> {
    console.log(e)
    return EMPTY
  }
  }
