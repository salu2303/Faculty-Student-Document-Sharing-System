import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Istudent } from '../Istudent';
import { DemoService} from '../demo.service';
import { CookieService } from 'ngx-cookie-service';
import { Iadmin } from 'src/Iadmin';
import { Iadm } from '../Iadm';
import { Ibl } from '../Ibl';
import { Iassi } from '../Iassi';
@Component({
  selector: 'app-sassi',
  templateUrl: './sassi.component.html',
  styleUrls: ['./sassi.component.css']
})
export class SassiComponent implements OnInit {
    assi:Iassi[];
    name:string;
    admin:Istudent;
    fac:Iadm[];
    branch:String;
    sem:number;
    constructor(private demoservice:DemoService, private Aroute: ActivatedRoute, private router: Router,private cookieservice:CookieService) { }
    
  ngOnInit(): void {
    if(!this.cookieservice.get("name")){
      this.router.navigate(['/']);
    
    }
    this.name=this.cookieservice.get("name");
    console.log(this.name);
    this.callService(this.name);
  
  }
  callService(name:string) {
    this.demoservice.sfind(name).subscribe(res => {
      this.admin = res;
      console.log(res);
      this.branch=res.stu_branch;
      this.sem=res.stu_sem;
      this.demoservice.fafind(this.branch,this.sem).subscribe(res1=>{
        this.fac=res1;
        console.log(res1);
      })

    })
  }
  disp(sub){
    console.log(sub);
    this.demoservice.assifind(sub).subscribe(res1=>{
      this.assi=res1;
      console.log(res1);
    })

  }
  

}
