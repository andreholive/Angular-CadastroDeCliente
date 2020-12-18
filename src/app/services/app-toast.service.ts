import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppToastService {

  toasts: any[] = [];

  show(header: string, body: string) {
    this.toasts.push({ header, body });
  }
  
}
