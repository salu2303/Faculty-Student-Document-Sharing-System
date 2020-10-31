import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-testsemf',
  templateUrl: './testsemf.component.html',
  styleUrls: ['./testsemf.component.css']
})
export class TestsemfComponent implements OnInit {

  constructor(private Aroute: ActivatedRoute, private router: Router,  private cookieservice:CookieService) { }
  
  ngOnInit(): void {
    console.log("namehg"+this.cookieservice.get("name"));
    if(!this.cookieservice.get("name")){
      this.router.navigate(['/faculty']);
    
    }
  }
  fsub(){
    this.router.navigate(['/testf']);
  
  }
}
