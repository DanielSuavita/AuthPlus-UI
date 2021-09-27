import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthFacadeService } from 'src/app/Facades/auth-facade.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  public AuthForm: FormGroup;

  constructor(private Auth: AuthFacadeService, private Builder: FormBuilder) {
    this.AuthForm = this.InitForm();
  }

  ngOnInit() {}

  InitForm(): FormGroup {
    return this.Builder.group({
      NombreUsuario: ['', Validators.required],
      Contrasena: ['', Validators.required],
    });
  }

  async SaveForm(): Promise<void> {
    if (this.AuthForm.invalid) {
      return Object.values(this.AuthForm.controls).forEach((control) => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach((subcontrol) => {
            subcontrol.markAllAsTouched();
          });
        } else {
          control.markAllAsTouched();
        }
      });
    } else {
      await this.Auth.Login(this.AuthForm);
    }
  }

  Valid(Name: string): boolean{
    return this.AuthForm.get(Name).touched && this.AuthForm.get(Name).invalid;
  }
}
