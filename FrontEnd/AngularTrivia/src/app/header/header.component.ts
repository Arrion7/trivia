import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../help/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }
  onLogout(){
    localStorage.removeItem(Constants.UserName);
  }

  get isUserConnected(){
    const user = localStorage.getItem(Constants.UserName);
    return user && user.length>0;
  }

}
