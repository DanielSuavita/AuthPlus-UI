import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Log } from '../Models/Log.Model';
import { environment } from 'src/environments/environment';
import { Usuario } from '../Models/Usuario.Model';
const BASE_URL = environment.BASE_URL;

@Injectable({
  providedIn: 'root',
})
export class LogsService {
  constructor(private IHttp: HttpClient) {}

  public async GetCurent(User: Usuario): Promise<Log[]> {
    return this.IHttp.post<Log[]>(`${BASE_URL}/Logs/All`, User).toPromise();
  }

  public async GetTotal(User: Usuario): Promise<Log[]> {
    return this.IHttp.post<Log[]>(`${BASE_URL}/Logs/All`, User).toPromise();
  }
}
