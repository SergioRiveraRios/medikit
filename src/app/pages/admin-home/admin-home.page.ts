import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/admin/admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.page.html',
  styleUrls: ['./admin-home.page.scss'],
})
export class AdminHomePage implements OnInit {
  public admin: Admin;
  constructor(public router:Router) {
    this.admin = JSON.parse(localStorage.getItem('myData')) as Admin;
    console.log("Did data load? : ", this.admin);
   }

  ngOnInit() {
  }
  logout(){
    this.router.navigate(['/login'])
  }
}
