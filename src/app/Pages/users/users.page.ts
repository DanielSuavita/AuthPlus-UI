import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthFacadeService } from 'src/app/Facades/auth-facade.service';
import { Usuario } from 'src/app/Models/Usuario.Model';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  public UsersList = this.Users.GetAll();
  public UsersListFilter!: Promise<Usuario[]>;

  constructor(private Users: AuthFacadeService, private Route: Router) {}

  ngOnInit() {
    this.UsersListFilter = this.UsersList;
  }

  async FilterUsersList(search: any): Promise<void> {
    this.UsersListFilter = this.UsersList.then((List) =>
      List.filter(
        (User) =>
          User.nombre.includes(search.detail.value) ||
          User.correo.includes(search.detail.value) ||
          `${User.celular}`.includes(search.detail.value)
      )
    );
  }

  GotoLogs(User: Usuario): void{
    this.Users.SelectedUser.next(User);
    this.Route.navigate([`/logs`, User.id]);
  }
}
