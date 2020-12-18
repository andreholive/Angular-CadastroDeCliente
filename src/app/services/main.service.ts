import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EMPTY } from 'rxjs';

export class MainService {

  baseUrl = 'http://localhost:8080';

  constructor() {
  }

  errorHandler(e: any): Observable<any> {
    return EMPTY
  }
}
