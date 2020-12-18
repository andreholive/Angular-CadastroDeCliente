import { HttpClient } from '@angular/common/http';
import { MainService } from './main.service';
import { Address } from 'src/app/models/address.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AddressService extends MainService{

  constructor(private http: HttpClient) {
    super();
  }

  create(addr: Address): Observable<Address> {
    return this.http.post<Address>(this.baseUrl+'/address', addr).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  update(addr: Address): Observable<Address> {
    return this.http.put<Address>(this.baseUrl+`/address/${addr.id}`, addr).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }
}
