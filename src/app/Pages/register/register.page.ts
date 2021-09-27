import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthFacadeService } from 'src/app/Facades/auth-facade.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public RegisterForm: FormGroup;
  constructor(private Users: AuthFacadeService, private Builder: FormBuilder) {
    this.RegisterForm = this.InitForm();
  }

  ngOnInit() {}

  InitForm(): FormGroup {
    return this.Builder.group({
      Nombre: ['', Validators.required],
      NombreUsuario: ['', Validators.required],
      Contrasena: ['', Validators.required],
      Correo: ['', Validators.required],
      Celular: [0, Validators.required],
      Rol: [{}, Validators.required],
    });
  }

  async SaveForm(): Promise<void> {
    if (this.RegisterForm.invalid) {
      return Object.values(this.RegisterForm.controls).forEach((control) => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach((subcontrol) => {
            subcontrol.markAllAsTouched();
          });
        } else {
          control.markAllAsTouched();
        }
      });
    } else {
      await this.Users.Register(this.RegisterForm);
    }
  }

  Valid(Name: string): boolean{
    return this.RegisterForm.get(Name).touched && this.RegisterForm.get(Name).invalid;
  }

}
