import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iadmin } from 'src/Iadmin';
import { AdminlService} from '../adminl.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  admin:Iadmin;
  cname:string;
  constructor(private demoservice:AdminlService, private Aroute: ActivatedRoute, private router: Router,private cookieservice:CookieService) { }
  
  ngOnInit(): void {
    if(this.cookieservice.get("name")==""){
      this.router.navigate(['']);
    }
    
    this.cname=this.cookieservice.get("name");
    console.log(this.cname);
    this.callService(this.cname);
  }
  callService(cname:string) {
    this.demoservice.find(cname).subscribe(res => {
      this.admin = res;
      console.log(res);
    })
  }
}
