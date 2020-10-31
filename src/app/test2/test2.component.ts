import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iadm } from '../Iadm';
import { DemoService} from '../demo.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  admin:Iadm;
  fname:string;
  constructor(private demoservice:DemoService, private Aroute: ActivatedRoute, private router: Router,private cookieservice:CookieService) { }
  
  ngOnInit(): void {
    if(!this.cookieservice.get("name")){
      this.router.navigate(['/']);
    
    }
    this.fname=this.cookieservice.get("name");
    console.log(this.fname);
    this.callService(this.fname);
  }
  callService(cname:string) {
    this.demoservice.ffind(cname).subscribe(res => {
      this.admin = res;
      console.log(res);
    })
  }

}
