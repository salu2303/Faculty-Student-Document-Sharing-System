import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iadm } from '../Iadm';
import { DemoService} from '../demo.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-navfac',
  templateUrl: './navfac.component.html',
  styleUrls: ['./navfac.component.css']
})
export class NavfacComponent implements OnInit {
  admin:Iadm;
  cname:string;
  constructor(private demoservice:DemoService, private Aroute: ActivatedRoute, private router: Router,private cookieservice:CookieService) { }
 
  ngOnInit(): void {
  }
  fabt(){
    this.router.navigate(['/test2']);
  }
  del(){
    this.cookieservice.set("name",null,-1);
    this.router.navigate(['']);

  }
 
}
