import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://sheet.best/api/sheets/81d86bd3-6d0c-45cd-b56b-0b74094711e5';
  HttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpCliente: HttpClient) { }

  //C.R.U.D  - CREATE, READ, UPDATE, DELETE
  //Retorna a Lista de Usuários READ

  getUsers():Observable<User[]>{
    return this.httpCliente.get<User[]>(this.apiUrl);
  }

  //Salva usuario no banco CREATE

  postUser(user: User):Observable<User>{
    return this.httpCliente.post<User>(this.apiUrl, user, this.HttpOptions)
  }

  //15:33
}
