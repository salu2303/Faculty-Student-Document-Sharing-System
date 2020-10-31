import { Component, OnInit } from '@angular/core';
import { Istudent } from '../Istudent';
import { IRes } from '../IRes';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  name:string;
  pswd:string;
  branch:string;
  sem:any;
  constructor(private userservice: StudentService,private router: Router,private cookieservice:CookieService) { }

  ngOnInit(): void {
    if(this.cookieservice.get("name")==""){
      console.log("shit");
      this.router.navigate(['']);
  }
  }
  addstu(stud:Istudent){
    if(this.name==undefined || this.branch==undefined || this.pswd==undefined || this.sem==undefined){
      alert("please provide all credentials");
    }
    else{
    console.log(this.name,this.pswd,this.branch,this.sem);
    console.log(stud);
    this.userservice.addstu(stud).subscribe( (res:HttpResponse<IRes>)  => {this.che(res);
    } );
    }
}
che(res:HttpResponse<any>){
  console.log("che");
  

  alert(this.name+" "+"is added");
  this.name="Enter studentname";
  this.pswd="Enter password";

}

}
