import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Usuario } from '../Models/Usuario.Model';
const BASE_URL = environment.BASE_URL;
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public IsAuth = !!sessionStorage.getItem('IsAuth') || false;
  constructor(private IHttp: HttpClient, private Route: Router) {}

  public async Login(Form: FormGroup): Promise<void> {
    this.IsAuth = await this.IHttp.post<boolean>(`${BASE_URL}/Auth`, Form.value as Usuario).toPromise();
    if (this.IsAuth){
      sessionStorage.setItem('IsAuth', `${this.IsAuth}`);
      this.Route.navigate(['/home']);
    }
  }
}
