import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Istudent } from '../Istudent';
import { DemoService} from '../demo.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {
  admin:Istudent;
  name:string;
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
    })
  }

}
