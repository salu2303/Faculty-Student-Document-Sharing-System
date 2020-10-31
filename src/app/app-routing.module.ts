import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { FacultyComponent } from './faculty/faculty.component';
import { AppComponent } from './app.component';
import { IndComponent } from './ind/ind.component';
import { StudentComponent } from './student/student.component';
import { AhomeComponent } from './ahome/ahome.component';
import { TestsemfComponent } from './testsemf/testsemf.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { RemstudentComponent } from './remstudent/remstudent.component';
import { AddfacultyComponent } from './addfaculty/addfaculty.component';
import { RemfacultyComponent } from './remfaculty/remfaculty.component';
import { AddannComponent } from './addann/addann.component';
import { Test3Component } from './test3/test3.component';
import { TestfComponent } from './testf/testf.component';
import { FsubComponent } from './fsub/fsub.component';
import { TestsemComponent } from './testsem/testsem.component';
import { Test2Component } from './test2/test2.component';
import { TestsComponent } from './tests/tests.component';
import { SsubComponent } from './ssub/ssub.component';
import { TestComponent } from './test/test.component';
import { ViewdetComponent } from './viewdet/viewdet.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ViewnotComponent } from './viewnot/viewnot.component';
import { ViewnotsComponent } from './viewnots/viewnots.component';
import { FassiComponent } from './fassi/fassi.component';
import { SassiComponent } from './sassi/sassi.component';
import { SsubmitComponent } from './ssubmit/ssubmit.component';
import { CsubmitComponent } from './csubmit/csubmit.component';
import { ComComponent } from './com/com.component';
import { ConComponent } from './con/con.component';

const routes:Routes=[
  {path:'',component: IndComponent},
  {path:'admin',component: AdminComponent},
  {path:'faculty',component: FacultyComponent},
  {path:'student',component: StudentComponent},
  {path:'ahome',component: AhomeComponent},
  {path:'testsemf',component: TestsemfComponent},
  {path:'addstudent',component: AddstudentComponent},
  {path:'remstudent',component: RemstudentComponent},
  {path:'addfaculty',component: AddfacultyComponent},
  {path:'remfaculty',component: RemfacultyComponent},
  {path:'addann',component: AddannComponent},
  {path:'#',component: AhomeComponent},
  {path:'test3',component: Test3Component},
  {path:'testf',component: TestfComponent},
  {path:'fsub',component: FsubComponent},
  {path:'student',component: StudentComponent},  
  {path:'testsem',component: TestsemComponent}  ,
  {path:'test2',component: Test2Component},  
  {path:'tests',component: TestsComponent},
  {path:'ssub',component: SsubComponent},
  {path:'test',component:TestComponent},
  {path:'viewdet',component: ViewdetComponent},
  {path:'aboutme',component: AboutmeComponent},
  {path:'viewnot',component: ViewnotComponent},
  {path:'viewnots',component: ViewnotsComponent},
  {path:'fassi',component: FassiComponent},
  {path:'sassi',component: SassiComponent},
  {path:'ssubmit',component: SsubmitComponent},
  {path:'csubmit',component: CsubmitComponent},
  {path:'com',component: ComComponent},
  {path:'con',component: ConComponent}
  
  
  
  

];

@NgModule({
  declarations: [
  ],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
export const routingcomponent=[AdminComponent,FacultyComponent,IndComponent,StudentComponent,AhomeComponent,TestsemfComponent,AddstudentComponent]