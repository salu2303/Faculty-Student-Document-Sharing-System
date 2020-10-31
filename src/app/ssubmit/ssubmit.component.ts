import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iadm } from '../Iadm';
import { DemoService} from '../demo.service';
import { CookieService } from 'ngx-cookie-service';
import { Iadmin } from 'src/Iadmin';
import { $ } from 'protractor';
import { ControlContainer, FormBuilder, FormGroup } from '@angular/forms';
import { Istudent } from '../Istudent';
import { Iassi } from '../Iassi';

@Component({
  selector: 'app-ssubmit',
  templateUrl: './ssubmit.component.html',
  styleUrls: ['./ssubmit.component.css']
})
export class SsubmitComponent implements OnInit {
  myform:FormGroup;
 // fb:FormBuilder;
  uplod:File;
  subj: any;
  path:String;
  constructor(private userservice: DemoService,private fb:FormBuilder,private Aroute: ActivatedRoute, private router: Router,private cookieservice:CookieService) { }
  sta:Boolean;
  name:string;
  fac:Iadm[];
  subname:String;
  branch:String;
  sem:Number;
  sub:String;
  student:Istudent;
 ass:Iassi[];
 msg:String="";
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
    this.userservice.sfind(name).subscribe(res => {
      this.student = res;
      console.log("plz");
      console.log(res);
      this.userservice.fafind(res.stu_branch,res.stu_sem).subscribe(res1=>{
        this.fac=res1;
        console.log(res1);
      })

    })
   
 

}
uplood(branch,sem,subj,path){
  console.log("assa",branch,sem,subj);
  this.branch=branch;
  this.sem=sem;
  this.subj=subj;
  this.path=path;
  console.log("sas",this.subj);

}
onFileChange(event){
  //console.log("sdf");
  const file=(event.target as HTMLInputElement).files[0];
  this.myform.get('upld').setValue(file);
}
save(){
  
  var doc=this.myform.get('upld').value as File
  console.log("nme",doc);
  const formdata=new FormData();
  formdata.append('updoc',doc);
  console.log("asssaas",this.name,this.branch,this.sem,this.subj,this.path);
  this.userservice.uploadsubassi(formdata,this.name,this.branch,this.sem,this.subj,this.path).subscribe((res)=>{
    console.log("success submit assi");
    if(res['message']=="err"){
      alert("please eneter file");
    }
    else{
    alert("Your file is saved");
    
    }}
  );

}
disp(sub){
  this.msg="";
  console.log(sub);
  this.userservice.assifind(sub).subscribe(res1=>{
    this.ass=res1;
    console.log(this.ass);
  })

}
status(pat){
  console.log(this.name);
 console.log(pat);
 this.userservice.findstatus(this.name,pat).subscribe((res)=>{
   console.log(res['message']);
   if(res['message']=="such student not found"){
     this.msg="PENDING";
   }
   else{
    this.msg="SUBMITTED";
  
   }
   
 })
}
}
