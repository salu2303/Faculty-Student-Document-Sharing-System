import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemoService} from '../demo.service';
import { CookieService } from 'ngx-cookie-service';
import { Inot } from '../Inot';
import { Iadm } from '../Iadm';
@Component({
  selector: 'app-viewnot',
  templateUrl: './viewnot.component.html',
  styleUrls: ['./viewnot.component.css']
})
export class ViewnotComponent implements OnInit {
  fcon:String;
  name:String;
  nnot:Inot[];
  branch:String;
  fac:Iadm;
  constructor(private demoservice:DemoService, private Aroute: ActivatedRoute, private router: Router,private cookieservice:CookieService) { }
  
  ngOnInit(): void {
    this.name=this.cookieservice.get("name");
    this.demoservice.ffind(this.name).subscribe(res=>{
      this.fac=res;
      console.log("actual",res,res.fac_branch);
      this.branch=res.fac_branch;
      console.log("sas",this.branch);
      this.demoservice.nfind(this.branch).subscribe(rescar => {
        console.log("dsds");
        this.nnot = rescar;
        console.log("ss",rescar);  })
    })
    if(!this.cookieservice.get("name")){
      this.router.navigate(['/']);
    
    }
    console.log("qw",this.branch);
    
  }
 
}
