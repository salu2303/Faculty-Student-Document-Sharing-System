import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iadm } from '../Iadm';
import { DemoService} from '../demo.service';
import { CookieService } from 'ngx-cookie-service';
import { Iadmin } from 'src/Iadmin';
import { $ } from 'protractor';
import { ControlContainer, FormBuilder, FormGroup } from '@angular/forms';
import { Istudent } from '../Istudent';
import { Isubsubmit } from '../Isubsubmit';

@Component({
  selector: 'app-csubmit',
  templateUrl: './csubmit.component.html',
  styleUrls: ['./csubmit.component.css']
})
export class CsubmitComponent implements OnInit {
  myform:FormGroup;
 // fb:FormBuilder;
  uplod:File;
  constructor(private userservice: DemoService,private fb:FormBuilder,private Aroute: ActivatedRoute, private router: Router,private cookieservice:CookieService) { }

  name:string;
  fac:Iadm[];
  submit:Isubsubmit[];
  subname:String;
  branch:String;
  sem:Number;
  sub:String;
  student:Istudent;
 
  ngOnInit(): void {
    if(!this.cookieservice.get("name")){
      this.router.navigate(['/']);
    
    }
    this.name=this.cookieservice.get("name");
    console.log(this.name);
    this.callService(this.name);
    this.myform=this.fb.group({
      upld:['']
    });
  }
  callService(name:string) {
   // console.log(this.branch,this.sem);
    this.userservice.fifind(name).subscribe(res => {
      this.fac = res;
      console.log("plz");
      console.log(res);
     
    })
   
 

}


disp(branch,sem,sub){

  this.userservice.submitfind(branch,sem,sub).subscribe((res)=>{
    this.submit=res;
    
    console.log(res);
  })
  //console.log(this.fac);
  

}
}
