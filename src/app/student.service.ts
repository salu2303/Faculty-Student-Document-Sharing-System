import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpResponse} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Istudent} from './Istudent';
import { CompileShallowModuleMetadata } from '@angular/compiler';

export const httpOptions =  {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private http:HttpClient) { }
  addstu(stud:Istudent):Observable<any>{
     return this.http.post<any>("http://localhost:8000/addstu/",stud,httpOptions).pipe(map(res=>res));
  }

  delestu(name:string,pswd:string):Observable<any>{
    console.log(name);
    return this.http.delete<any>("http://localhost:8000/delstu/"+name+"/"+pswd)  }
}
