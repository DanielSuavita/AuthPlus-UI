import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Log } from '../Models/Log.Model';
import { Usuario } from '../Models/Usuario.Model';
import { AuthService } from '../Services/auth.service';
import { LogsService } from '../Services/logs.service';
import { UsersService } from '../Services/users.service';

@Injectable({
  providedIn: 'root',
})
export class AuthFacadeService {
  public SelectedUser = new BehaviorSubject<Usuario>({} as Usuario);
  constructor(
    private IAuth: AuthService,
    private ILog: LogsService,
    private IUsers: UsersService
  ) {}

  public async Login(Form: FormGroup): Promise<void> {
    await this.IAuth.Login(Form);
  }

  public GetCurent(User: Usuario): Promise<Log[]> {
    return this.ILog.GetCurent(User);
  }

  public GetTotal(User: Usuario): Promise<Log[]> {
    return this.ILog.GetTotal(User);
  }

  public async GetAll(): Promise<Usuario[]> {
    return await this.IUsers.GetAll();
  }

  public Get(t: number): void {
    this.IUsers.Get(t);
  }

  public Register(Form: FormGroup): void {
    this.IUsers.Register(Form);
  }
}
