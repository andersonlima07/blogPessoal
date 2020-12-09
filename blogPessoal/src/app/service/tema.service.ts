import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTemas() {
    return this.http.get('https://localhost:8080/tema', this.token)
  }

  getByIdTema(id: number) {
    return this.http.get(`https://localhost:8080/tema/${id}`, this.token) /*ID com crase*/
  }

  postTema(tema: Tema) {
    return this.http.post('https://localhost:8080/tema', tema, this.token)
  }

  putTema(tema: Tema) {
    return this.http.put('https://localhost:8080/tema', tema, this.token)
  }

  deleteTema(id: number) {
    return this.http.delete(`https://localhost:8080/tema/${id}`, this.token)
  }

  getByNomeTema(nome: string) {
    return this.http.get(`https://localhost:8080/tema/nome/${nome}`, this.token)
  }


}
