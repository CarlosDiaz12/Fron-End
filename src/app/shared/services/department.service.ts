import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departamento } from 'src/app/model/Departamento';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  controllerUrl: string = '/departamentos';
  constructor(private http: HttpClient) { }

  GetDepartamentos(): Observable<Departamento[]> {
    return this.http.get<Departamento[]>(environment.apiUrl + this.controllerUrl);
  }
}
