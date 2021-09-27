import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private Auth: AuthService) { }

  ngOnInit() {}

  get IsAuth(): boolean{
    return this.Auth.IsAuth;
  }

}
