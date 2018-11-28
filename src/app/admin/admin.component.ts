import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../db/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  token = ""
  login: FormGroup

  constructor(private _fb: FormBuilder, private _login: DataService, private router: Router) {
  }

  // public onAdminClick() {
  //   this.router.navigate(['/'])
  // }

  ngOnInit() {
    this.login = this._fb.group({
      email: "",
      password: ""
    })
  }

  adminLogin() {
    if (this.login.invalid) {
      return;
  } else {
    this.router.navigate(['/'])
  }
  this._login.getLogin(this.login.value).subscribe((res: any) => {this.token = res.token; localStorage.setItem("token", this.token)})
  }
}
