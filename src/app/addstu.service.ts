import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpResponse} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Iadm} from './Iadm';
import { CompileShallowModuleMetadata } from '@angular/compiler';

export const httpOptions =  {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class AddstuService {

  constructor(private http:HttpClient) { }
  addfac(fac:Iadm):Observable<any>{
     return this.http.post<any>("http://localhost:8000/addfac/",fac,httpOptions).pipe(map(res=>res));
  }}
