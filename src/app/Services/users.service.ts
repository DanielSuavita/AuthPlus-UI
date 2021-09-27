import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Usuario } from '../Models/Usuario.Model';
const BASE_URL = environment.BASE_URL;

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private IHttp: HttpClient) {}

  public async GetAll(): Promise<Usuario[]> {
    return await this.IHttp.get<Usuario[]>(`${BASE_URL}/Users`).toPromise();
  }

  public Get(t: number): void {}

  public async Register(Form: FormGroup): Promise<void> {
    await this.IHttp.post<boolean>(`${BASE_URL}/Users/Register`, Form.value as Usuario).toPromise();
  }
}
