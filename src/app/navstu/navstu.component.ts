import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Istudent } from '../Istudent';
import { DemoService} from '../demo.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-navstu',
  templateUrl: './navstu.component.html',
  styleUrls: ['./navstu.component.css']
})
export class NavstuComponent implements OnInit {

  admin:Istudent;
  cname:string;
  constructor(private demoservice:DemoService, private Aroute: ActivatedRoute, private router: Router,private cookieservice:CookieService) { }
 

  ngOnInit(): void {
  }
  del(){
    this.cookieservice.set("name",null,-1);
    this.router.navigate(['']);

  }
  sabt(){
    this.router.navigate(['/tests']);
   // this.cname=this.cookieservice.get("name");
    //console.log(this.cname);
    //this.callService(this.cname);
  }
}
