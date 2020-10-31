import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routingcomponent} from './app-routing.module';
import { AppComponent } from './app.component';
import { AhomeComponent } from './ahome/ahome.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { RemstudentComponent } from './remstudent/remstudent.component';
import { AddfacultyComponent } from './addfaculty/addfaculty.component';
import { RemfacultyComponent } from './remfaculty/remfaculty.component';
import { AddannComponent } from './addann/addann.component';
import { Test3Component } from './test3/test3.component';
import { TestsemfComponent } from './testsemf/testsemf.component';
import { TestfComponent } from './testf/testf.component';
import { FsubComponent } from './fsub/fsub.component';
import { UldfComponent } from './uldf/uldf.component';
import { ChatComponent } from './chat/chat.component';
import { Test2Component } from './test2/test2.component';
import { StudentComponent } from './student/student.component';
import { TestsemComponent } from './testsem/testsem.component';
import { SsubComponent } from './ssub/ssub.component';
import { UldComponent } from './uld/uld.component';
import { ChatsComponent } from './chats/chats.component';
import { TestsComponent } from './tests/tests.component';
import { TestComponent } from './test/test.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { NavadminComponent } from './navadmin/navadmin.component';
import { NavfacComponent } from './navfac/navfac.component';
import { NavstuComponent } from './navstu/navstu.component';
import { ComComponent } from './com/com.component';
import { DemoService } from './demo.service';
import { HttpClient ,HttpClientModule} from '@angular/common/http';
import { ViewdetComponent } from './viewdet/viewdet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddstuService } from './addstu.service';
import { DelfacService } from './delfac.service';
import { StudentService } from './student.service';
import { RouterModule } from '@angular/router';
import { AdminlService } from './adminl.service';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ViewnotComponent } from './viewnot/viewnot.component';
import { ViewnotsComponent } from './viewnots/viewnots.component';
import { FassiComponent } from './fassi/fassi.component';
import { SassiComponent } from './sassi/sassi.component';
import { SsubmitComponent } from './ssubmit/ssubmit.component';
import { CsubmitComponent } from './csubmit/csubmit.component';
import { ConComponent } from './con/con.component';
@NgModule({
  declarations: [
    routingcomponent,
    AppComponent,
    AhomeComponent,
    AddstudentComponent,
    RemstudentComponent,
    AddfacultyComponent,
    RemfacultyComponent,
    AddannComponent,
    Test3Component,
    TestsemfComponent,
    TestfComponent,
    FsubComponent,
    UldfComponent,
    ChatComponent,
    Test2Component,
    StudentComponent,
    TestsemComponent,
    SsubComponent,
    UldComponent,
    ChatsComponent,
    TestsComponent,
    TestComponent,
    NavComponent,
    FooterComponent,
    NavadminComponent,
    NavfacComponent,
    NavstuComponent,
    ComComponent,
   ViewdetComponent,
   AboutmeComponent,
   ViewnotComponent,
   ViewnotsComponent,
   FassiComponent,
   SassiComponent,
   SsubmitComponent,
   CsubmitComponent,
   ConComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,  
  ],
  providers: [DemoService,HttpClient,AddstuService,DelfacService,StudentService,AdminlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
