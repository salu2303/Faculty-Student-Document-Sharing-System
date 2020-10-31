import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DelfacService } from '../delfac.service';

@Component({
  selector: 'app-remfaculty',
  templateUrl: './remfaculty.component.html',
  styleUrls: ['./remfaculty.component.css']
})
export class RemfacultyComponent implements OnInit {

  name:string;
  pswd:string;
  err:string;
  constructor(private userservice: DelfacService,private router: Router,private cookieservice:CookieService) { }

  ngOnInit(): void {
    if(this.cookieservice.get("name")==""){
      this.router.navigate(['']);
    }
  }

  delfac(){
   
    
      console.log(name);
      this.userservice.delefac(this.name,this.pswd).subscribe((res:HttpResponse<any>) => this.che(res));
      
  //  console.log("delted");
    //this.userservice.delfac(name,pswd).subscribe( (res:HttpResponse<IRes>)  => {this.che(res);
    //} );
  
}
che(res:HttpResponse<any>){
  if(res['message'] == "record not found!"){
    this.err=res['message'];
    alert("please provide valid credentials");
    }
    else{ alert(this.name+" "+"is removed");
    this.name="Enter facultyname";
    this.pswd="Enter password";
}}

}
