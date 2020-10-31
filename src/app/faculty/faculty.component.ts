import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemoService } from '../demo.service';
import { Observable, throwError, of } from 'rxjs';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { HttpResponse } from '@angular/common/http';
import { IRes } from '../IRes';
import { Istudent } from '../Istudent';



@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  name:string;
  pswd:string;
  branch:string="Select branch";
  sem:number=1;
  myForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private userservice: DemoService,
    private router:Router,
    private cookieservice:CookieService
  ) { }
  
  ngOnInit(): void {
  }
  validate(){
    console.log(this.name,this.pswd,this.branch,this.sem);
    this.userservice.flogin(this.name,this.pswd,this.branch,this.sem).subscribe((res:HttpResponse<IRes>)  => {this.che(res);
    });
  }
  che(res:HttpResponse<IRes>){
   if(res['message']== "failed")
  {
    console.log("if",res['message']);

    alert(" Please enter correct credentials");
  }else if(res['message']=="Unable to find"){
      alert("provide everything");
  }
  else{
    this.cookieservice.set("name",this.name);
    console.log("cookie",this.cookieservice.get("name"));
  
    this.router.navigate(['/testsemf']);
  } 
  
  }

}
