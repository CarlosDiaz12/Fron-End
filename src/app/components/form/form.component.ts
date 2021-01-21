import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Departamento } from '../../model/Departamento';
import { DepartmentService } from '../../shared/services/department.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  // @ts-ignore
  usuarioForm: FormGroup;
  departamentoList: Departamento[] = [];
  constructor(private fb: FormBuilder,
              private userService: UserService,
              private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.usuarioForm = this.fb.group({
      Nombres: ['', Validators.required],
      Apellidos: ['', Validators.required],
      Genero: ['', Validators.required],
      FechaNacimiento: ['', Validators.required],
      IdDepartamento: ['', Validators.required],
      Cargo: ['', Validators.required],
      Cedula: ['', Validators.required],
      SupervisorInmediato: ['', Validators.required]
    });

    this.GetAllDepartamentos();
  }


  submitForm(): void {
    const data = this.usuarioForm.value;
    const IdDepartamento = +data.IdDepartamento;
    data.IdDepartamento = IdDepartamento;
    this.userService.PostUsuario(data).subscribe(res => {
      alert('Se ha guardado correctamente');
      this.usuarioForm.reset();
    });

  }


  GetAllDepartamentos(): void {
    this.departmentService.GetDepartamentos()
    .subscribe(res => {
      this.departamentoList = res;
    });
  }
}
