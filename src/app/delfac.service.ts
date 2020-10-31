import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpResponse} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Iadm} from './Iadm';
import { CompileShallowModuleMetadata } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class DelfacService {

  constructor(private http:HttpClient) { }
  delefac(name:string,pswd:string):Observable<any>{
    console.log(name);
    return this.http.delete<any>("http://localhost:8000/delfac/"+name+"/"+pswd)  }
  }
