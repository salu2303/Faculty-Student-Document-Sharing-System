import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpResponse} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Iadm} from './Iadm';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Istudent } from './Istudent';
import { Inot } from './Inot';
import { Ibl } from './Ibl';
import { Iassi } from './Iassi';
import { Isubsubmit } from './Isubsubmit';
@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private http:HttpClient) { }
  getfac(branch:String,sem:number):Observable<Iadm[]>{
    return this.http.get<Iadm[]>("http://localhost:8000/getfac/"+branch+"/"+sem);
  }
  slogin(name:String,pswd:String,branch:String,sem:number):Observable<any>{
    return this.http.get<HttpResponse<any>>("http://localhost:8000/slogin/"+name+"/"+pswd+"/"+branch+"/"+sem);
  }
  flogin(name:String,pswd:String,branch:String,sem:number):Observable<any>{
    return this.http.get<HttpResponse<any>>("http://localhost:8000/flogin/"+name+"/"+pswd+"/"+branch+"/"+sem);
  }

  ffind(name:String):Observable<Iadm>{
    return this.http.get<Iadm>("http://localhost:8000/ffind/"+name);
 
  }
  fifind(name:String):Observable<Iadm[]>{
    return this.http.get<Iadm[]>("http://localhost:8000/fifind/"+name);
 
  }
  fafind(branch:String,sem:number):Observable<Iadm[]>{
    return this.http.get<Iadm[]>("http://localhost:8000/fafind/"+branch+"/"+sem);
 
  }
  

  sfind(name:String):Observable<Istudent>{
    return this.http.get<Istudent>("http://localhost:8000/sfind/"+name);
 
  }
  uploaddoc(formdata:FormData,branch:String,sv:Number):Observable<any>{
    return this.http.post<HttpResponse<any>>("http://localhost:8000/uploadoc/"+sv+"/"+branch,formdata);
  }
  nfind(branch:String):Observable<Inot[]>{
    console.log(branch);
    return this.http.get<Inot[]>("http://localhost:8000/nfind/"+branch);
 
  }
  nofind(branch):Observable<Inot[]>{
    return this.http.get<Inot[]>("http://localhost:8000/nofind/"+branch);
 
  }
  
  uploadbook(formdata:FormData,branch:String,sem:Number,sub:String):Observable<any>{
    console.log(branch);
    return this.http.post<HttpResponse<any>>("http://localhost:8000/uploadbook/"+branch+"/"+sem+"/"+sub,formdata);
  }
  uploadsubassi(formdata:FormData,name:String,branch:String,sem:Number,sub:String,path:String):Observable<any>{
    console.log("myone",sub);
    return this.http.post<HttpResponse<any>>("http://localhost:8000/usubassi/"+name+"/"+branch+"/"+sem+"/"+sub+"/"+path,formdata);
  }
  
  uploadassi(formdata:FormData,branch:String,sem:Number,sub:String):Observable<any>{
    console.log(branch);
    return this.http.post<HttpResponse<any>>("http://localhost:8000/uploadassi/"+branch+"/"+sem+"/"+sub,formdata);
  }
  
  blfind(sub:String):Observable<Ibl[]>{
    return this.http.get<Ibl[]>("http://localhost:8000/blfind/"+sub);
 
  }
  assifind(sub:String):Observable<Iassi[]>{
    return this.http.get<Iassi[]>("http://localhost:8000/assifind/"+sub);
 
  }

  submitfind(branch:String,sem:Number,sub:String):Observable<Isubsubmit[]>{
    return this.http.get<Isubsubmit[]>("http://localhost:8000/submitfind/"+branch+"/"+sem+"/"+sub);
 
  }
  status(branch:String,sem:Number,sub:String):Observable<Number>{
    return this.http.get<Number>("http://localhost:8000/submitfind/"+branch+"/"+sem+"/"+sub);
 
  }
  findstatus(name:String,path:String):Observable<any>{
    return this.http.get<HttpResponse<any>>("http://localhost:8000/findstatus/"+name+"/"+path);
 
  }
  vfind(branch:String):Observable<Inot[]>{
    return this.http.get<Inot[]>("http://localhost:8000/vfind/"+branch);
 
  }
}
