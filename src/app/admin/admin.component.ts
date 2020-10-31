import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminlService } from '../adminl.service';
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


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  name:string;
  pswd:string;
  branch:string="Select branch";
  myForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private userservice: AdminlService,
    private router:Router,
    private cookieservice:CookieService
  ) { }
  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      pswd: [
        '',
        [Validators.required],
      ]
    }); 
  }
  validate(){
   // console.log(this.name,this.pswd);
    this.userservice.checklogin(this.name,this.pswd,this.branch).subscribe((res:HttpResponse<IRes>)  => {this.che(res);
    });
  }
  che(res:HttpResponse<any>){
   if(res['message']== "failed")
  {
    console.log("if",res['message']);

    alert(" Please enter correct credentials");
  }
  else{
    this.cookieservice.set("name",this.name);
    console.log("cookie",this.cookieservice.get("name"));
  
    this.router.navigate(['/ahome']);
  } 
  
  }

  

  
}
