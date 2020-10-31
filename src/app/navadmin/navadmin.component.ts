import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iadmin } from 'src/Iadmin';
import { AdminlService} from '../adminl.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-navadmin',
  templateUrl: './navadmin.component.html',
  styleUrls: ['./navadmin.component.css']
})
export class NavadminComponent implements OnInit {
  admin:Iadmin;
  cname:string;
  constructor(private demoservice:AdminlService, private Aroute: ActivatedRoute, private router: Router,private cookieservice:CookieService) { }
 
  ngOnInit(): void {
  }
  abt(){
    this.router.navigate(['/aboutme']);
   // this.cname=this.cookieservice.get("name");
    //console.log(this.cname);
    //this.callService(this.cname);
  }
  logout(){
    console.log("asasasasasas",this.cookieservice.get("name"));
    this.cookieservice.set("name",null,-1);
    this.router.navigate(['']);
  }
 
}
