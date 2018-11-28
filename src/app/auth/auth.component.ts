import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../db/data.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
  login: FormGroup;
  private _admin = [];

  constructor(private fb: FormBuilder, private dataService: DataService) { }

  ngOnInit() {
    this.login = this.fb.group({
      email: new FormControl(),
      password: new FormControl()
    })
  }

    adminLogin(): void {
    this._admin.push(this.login)
    this.dataService.getLogin(this._admin[0].value).subscribe(
      Admin => localStorage.setItem('token', Admin[0].token )
      
    )
  }
}
