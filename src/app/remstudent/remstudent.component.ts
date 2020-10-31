import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { DelfacService } from '../delfac.service';
import { StudentService } from '../student.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-remstudent',
  templateUrl: './remstudent.component.html',
  styleUrls: ['./remstudent.component.css']
})
export class RemstudentComponent implements OnInit {
  name:string;
  pswd:string;
  constructor(private userservice: StudentService,private router: Router,private cookieservice:CookieService) { }

  ngOnInit(): void {
      if(this.cookieservice.get("name")==""){
        this.router.navigate(['']);
      }
  }
  delstu(){
   
    
    console.log(name);
    this.userservice.delestu(this.name,this.pswd).subscribe((res:HttpResponse<any>) => this.che(res));
    
//  console.log("delted");
  //this.userservice.delfac(name,pswd).subscribe( (res:HttpResponse<IRes>)  => {this.che(res);
  //} );

}
che(res:HttpResponse<any>){
if(res['message'] == "record not found!"){
alert("Please provide valid credentials");
}
else{

alert(this.name+" "+"is removed");
  this.name="Enter facultyname";
  this.pswd="Enter password";
}}

}
