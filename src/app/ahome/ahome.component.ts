import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-ahome',
  templateUrl: './ahome.component.html',
  styleUrls: ['./ahome.component.css']
})
export class AhomeComponent implements OnInit {
  name:string;
  constructor(   private cookieservice:CookieService,private router: Router
    ) { }

  ngOnInit(): void {
    if(this.cookieservice.get("name")==""){
        console.log("shit");
        this.router.navigate(['']);
    }
    else{
   this.name=this.cookieservice.get("name");}
  }

}
