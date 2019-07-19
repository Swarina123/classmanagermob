import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  @ViewChild('useremail')email;
  @ViewChild('feed')feed;
  router: Router;
  httpClient: HttpClient;
  

  
  constructor() { }

  ngOnInit() {
    

  }

  onSend() {
    console.log(this.email.value,this.feed.value);
    let data={'email': this.email.value, 'feed': this.feed.value};
    console.log(data);
    let dataa= JSON.stringify(data);
this.httpClient.post('http:/localhost:8100/feeds/',
data).subscribe((a:any)=>{console.log(a)});

  //trigger
      
      this.router.navigateByUrl('/main/tabs/routine');
  }
}
