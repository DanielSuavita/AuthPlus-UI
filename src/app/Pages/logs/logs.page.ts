import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthFacadeService } from 'src/app/Facades/auth-facade.service';
import { Log } from 'src/app/Models/Log.Model';
import { Usuario } from 'src/app/Models/Usuario.Model';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.page.html',
  styleUrls: ['./logs.page.scss'],
})
export class LogsPage implements OnInit {
  public LogsList!:  Promise<Log[]>;
  public LogsListFilter!: Promise<Log[]>;

  constructor(private Logs: AuthFacadeService) {}
  
  ngOnInit() {
    this.Logs.SelectedUser.subscribe(User =>{
      console.log(User);
      this.LogsList = this.Logs.GetTotal(User);
    });
    this.LogsListFilter = this.LogsList;
  }

  async FilterLogsList(search: any): Promise<void> {
    this.LogsListFilter = this.LogsList.then((List) =>
      List.filter(
        (Log) =>
          Log.user.nombreUsuario.includes(search.detail.value) ||
          `${Log.fecha}`.includes(search.detail.value)
      )
    );
  }

}
