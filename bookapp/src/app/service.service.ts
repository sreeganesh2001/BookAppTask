import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ibook } from './books';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private _url:string = "http://localhost:3000/books"

  constructor(private http:HttpClient) {}
  getData():Observable<Ibook[]>{
    return this.http.get<Ibook[]>(this._url);
  }
}
