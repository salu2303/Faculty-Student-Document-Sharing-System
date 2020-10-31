import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Istudent } from '../Istudent';
import { DemoService} from '../demo.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-testsem',
  templateUrl: './testsem.component.html',
  styleUrls: ['./testsem.component.css']
})
export class TestsemComponent implements OnInit {
  constructor(private Aroute: ActivatedRoute, private router: Router,private cookieservice:CookieService) { }
  
  ngOnInit(): void {
    console.log(this.cookieservice.get("name"));
    if(!this.cookieservice.get("name")){
      this.router.navigate(['/']);
    
    }
  }
  rsub(){
    this.router.navigate(['/ssub']);
  }
}
