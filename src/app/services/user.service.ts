import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User = {
    id: null,
    nome: null,
    email: null
  }

  constructor() { }

  setUser(){
    this.user.id = 1;
    this.user.nome = "André";
    this.user.email = "andreolive@live.com";
  }

  getUser(): User{
    return this.user;
  }
}
