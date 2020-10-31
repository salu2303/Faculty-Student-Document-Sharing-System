import { Component, OnInit } from '@angular/core';
import { Iadm } from '../Iadm';
import { IRes } from '../IRes';
import {AddstuService} from '../addstu.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-addfaculty',
  templateUrl: './addfaculty.component.html',
  styleUrls: ['./addfaculty.component.css']
})
export class AddfacultyComponent implements OnInit {
  name:string;
  pswd:string;
  branch:string;
  sem:any;
  sub:string;
  constructor(private userservice: AddstuService,private router: Router,private cookieservice:CookieService) { }

  ngOnInit(): void {
    if(this.cookieservice.get("name")==""){
      console.log("shit");
      this.router.navigate(['']);
  }
  }
  addfac(fac:Iadm){
    if(this.name==undefined || this.branch==undefined || this.pswd==undefined || this.sem==undefined || this.sub==undefined){
        alert("please provide all credentials");
    }
    else{
      console.log("added");
      this.userservice.addfac(fac).subscribe( (res:HttpResponse<IRes>)  => {this.che(res);
      } );
    }
  }
  che(res:HttpResponse<any>){
    console.log("che");
    

    alert(this.name+" "+"is added");
    this.name="Enter facultyname";
    this.pswd="Enter password";
    this.sub="Enter subject";
 
  }
  
}
