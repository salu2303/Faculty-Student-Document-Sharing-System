import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemoService} from '../demo.service';
import { CookieService } from 'ngx-cookie-service';
import { Inot } from '../Inot';
import { Istudent } from '../Istudent';
@Component({
  selector: 'app-viewnots',
  templateUrl: './viewnots.component.html',
  styleUrls: ['./viewnots.component.css']
})
export class ViewnotsComponent implements OnInit {
  fcon:String;
  name:String;
  //fpath:String;
  nnot:Inot[];
  stu:Istudent;
  branch:String;
  constructor(private demoservice:DemoService, private Aroute: ActivatedRoute, private router: Router,private cookieservice:CookieService) { }
  
  
  ngOnInit(): void {
    this.name=this.cookieservice.get("name");
    if(!this.cookieservice.get("name")){
      this.router.navigate(['/']);
    
    }
    this.demoservice.sfind(this.name).subscribe(res=>{
      this.stu=res;
      console.log(this.stu);
      this.branch=res.stu_branch;

      this.demoservice.nofind(this.branch).subscribe(rescar => {
        this.nnot = rescar;
      })
    })
    
  }

}
