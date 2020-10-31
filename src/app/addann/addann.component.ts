import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DemoService } from '../demo.service';
import {Inot} from '../Inot';
import { Iadmin } from 'src/Iadmin';
import { AdminlService} from '../adminl.service';
@Component({
  selector: 'app-addann',
  templateUrl: './addann.component.html',
  styleUrls: ['./addann.component.css']
})
export class AddannComponent implements OnInit {
  myform:FormGroup;
 // fb:FormBuilder;
  uplod:File;
  who:String="select whom";
  sv:Number;
  nnot:Inot[];
  name:String;
  admin:Iadmin;
  branch:String;
  constructor(private userservice: DemoService,private uservice:AdminlService,private fb:FormBuilder,private cookieservice:CookieService,private router: Router) { }

  ngOnInit(): void {
    this.name=this.cookieservice.get("name");
    console.log(this.name);

    this.uservice.find(this.name).subscribe(res => {
      this.admin = res;
      console.log(res);
      this.branch=res.admin_branch;
      console.log(this.branch);
    })

    if(this.cookieservice.get("name")==""){
      console.log("shit");
      this.router.navigate(['']);
  }
    this.myform=this.fb.group({
      upld:['']
    });
    
  }
  onFileChange(event){

    const file=(event.target as HTMLInputElement).files[0];
    this.myform.get('upld').setValue(file);
  }
  save(){
    console.log(this.who);
    if(this.who=="faculty"){
      this.sv=1;
    }
    else if(this.who=="student"){
      this.sv=2;
    }
    else{
      this.sv=3;
    }
    
    var doc=this.myform.get('upld').value as File
    
    const formdata=new FormData();
    formdata.append('udoc',doc);
    this.userservice.uploaddoc(formdata,this.branch,this.sv).subscribe((res)=>{
      console.log("success");
      console.log(res['message']);
      if(res['message']=="err"){
        alert("please enter file");
      }else{
      alert("Your file is saved");}
    });

  }
  viewall(){
    this.userservice.vfind(this.branch).subscribe(rescar => {
      this.nnot = rescar;
        })
  }


}
