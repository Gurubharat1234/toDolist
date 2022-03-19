import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private bt:HttpClient) { }
  dataFetch(){
    return this.bt.get<any>(`https://jsonplaceholder.typicode.com/todos`)
  }
}
