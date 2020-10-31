import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iassi } from '../Iassi';
import { DemoService} from '../demo.service';
import { CookieService } from 'ngx-cookie-service';
import { Iadmin } from 'src/Iadmin';
import { $ } from 'protractor';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Iadm } from '../Iadm';

@Component({
  selector: 'app-fassi',
  templateUrl: './fassi.component.html',
  styleUrls: ['./fassi.component.css']
})
export class FassiComponent implements OnInit {
  myform:FormGroup;
  uplod:File;
  constructor(private userservice: DemoService,private fb:FormBuilder,private Aroute: ActivatedRoute, private router: Router,private cookieservice:CookieService) { }
  fac:Iadm[];
  name:string;
  assi:Iassi[];
  subname:String;
  branch:String;
  sem:Number;
  sub:String;
  date:Date;
 aa:Iassi[];
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
  this.userservice.uploadassi(formdata,this.branch,this.sem,this.sub).subscribe((res)=>{
    console.log("success assi");
    alert("Your assignment is uploaded");
  });

}
viewmy(sub){
  console.log("subject is",sub);
  this.userservice.assifind(sub).subscribe((res)=>{
  this.aa=res;
  console.log(this.aa);
  });
}
}
