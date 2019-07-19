import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForOf } from '@angular/common';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

@ViewChild('email')email;
@ViewChild('password')password;

//jsondata
//

data: object;
  constructor(public http: HttpClient,private authService: AuthService, private router: Router) { }

  ngOnInit() {
  this.http.get('../../assets/teacher.json').subscribe(data => {

   this.data =data;
   console.log(data);
   });
   
 }
 webpost = { "teacher_name":"John", "teacher_contact":"30"};

  //constructor(private authService: AuthService, private router: Router) {}

  //ngOnInit(){}
onLogin() {
  console.log(this.email.value,this.password.value);
  
 if(this.email.value  ==this.webpost.teacher_name && this.password.value==this.webpost.teacher_contact){
    this.authService.login();
    this.router.navigateByUrl('/main/tabs/routine');
  }
  
}

}
