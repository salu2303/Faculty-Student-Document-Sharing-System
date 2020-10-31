import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DemoService } from '../demo.service';
import { Iadm } from '../Iadm';
@Component({
  selector: 'app-viewdet',
  templateUrl: './viewdet.component.html',
  styleUrls: ['./viewdet.component.css']
})
export class ViewdetComponent implements OnInit {
  admin:Iadm[];
  branch:string='Select branch';
  sem:any="select semester";
  temp:string="Select semester";
  constructor(private demoservice:DemoService, private Aroute: ActivatedRoute,private cookieservice:CookieService,private router: Router) { }
  
  
  ngOnInit(): void {
    if(this.cookieservice.get("name")==""){
      this.router.navigate(['']);
    }
    //this.Aroute.params.subscribe((param)=>{ this.branch=param.branch;this.sem=param.sem;} );
    
  }
  disp(){
    console.log(this.sem);
    this.callService(this.branch,this.sem);
  }
  callService(branch:string,sem:number) {
    this.demoservice.getfac(branch,sem).subscribe(rescar => {
      this.admin = rescar;
      console.log(rescar);
      
    })
  }

}
