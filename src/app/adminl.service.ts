import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders, HttpResponse } from '@angular/common/http';
import { Iadmin } from '../Iadmin'
import { Observable, throwError, of } from 'rxjs';
import { mergeMap, switchMap, retry,   map, catchError, filter, scan,delay } from 'rxjs/operators'; 
import { Type } from '@angular/compiler';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';

export const httpOptions =  {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}
import { timer } from 'rxjs';
import { Iadm } from './Iadm';
@Injectable({
  providedIn: 'root'
})
export class AdminlService {
  constructor(private http: HttpClient) { }

  checklogin(name:string,pswd:string,branch:string):Observable<any>{
    
    return this.http.get<HttpResponse<any>>("http://localhost:8000/login/"+name+"/"+pswd+"/"+branch);
  }
  find(cname:String):Observable<Iadmin>{
    return this.http.get<Iadmin>("http://localhost:8000/afind/"+cname);
 
  }
}
