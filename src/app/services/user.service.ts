import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  controllerUrl: string = '/usuarios';
  constructor(private http: HttpClient) { }

  PostUsuario(data: Usuario): Observable<any> {
    return this.http.post<any>(environment.apiUrl + this.controllerUrl, data);
  }
}
