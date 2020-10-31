import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iadm } from '../Iadm';
import { DemoService} from '../demo.service';
import { CookieService } from 'ngx-cookie-service';
import { Iadmin } from 'src/Iadmin';
import { $ } from 'protractor';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Iassi } from '../Iassi';
import { Ibl } from '../Ibl';

@Component({
  selector: 'app-testf',
  templateUrl: './testf.component.html',
  styleUrls: ['./testf.component.css']
})
export class TestfComponent implements OnInit {
  myform:FormGroup;
 // fb:FormBuilder;
  uplod:File;
  constructor(private userservice: DemoService,private fb:FormBuilder,private Aroute: ActivatedRoute, private router: Router,private cookieservice:CookieService) { }

  name:string;
  fac:Iadm[];
  subname:String;
  branch:String;
  sem:Number;
  sub:String;
  assi:Iassi[];
  bl:Ibl[];
 
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
    this.userservice.fifind(name).subscribe(res => {
      this.fac = res;
      console.log(res);
     

    })
 

}
uplood(branch,sem,sub){
  console.log(branch,sem,sub);
  this.branch=branch;
  this.sem=sem;
  this.sub=sub;

}
onFileChange(event){
  const file=(event.target as HTMLInputElement).files[0];
  this.myform.get('upld').setValue(file);
}
save(){
  var doc=this.myform.get('upld').value as File
  const formdata=new FormData();
  formdata.append('updoc',doc);
  this.userservice.uploadbook(formdata,this.branch,this.sem,this.sub).subscribe((res)=>{
    console.log("success book");
    alert("Your file is saved");
  });

}
viewmy(sub){
  console.log("subject is",sub);
  this.userservice.blfind(sub).subscribe((res)=>{
  this.bl=res;
  console.log(this.bl);
  });
}
}
