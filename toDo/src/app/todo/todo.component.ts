import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  userId: any;
  user
  value
  todos;
data;
data1 =[];
data2 =[];
bharat=true;
bharat1=false
bharat2 = false;
  constructor(private balu:TodoService) { }

  ngOnInit(): void {
    this.balu.dataFetch().subscribe((res)=>{
    console.log(res);
  this.todos=res
    })

    
     
  }

  
  rohit() {
    this.todos.forEach((ele)=>{
    if(ele.completed == true) {
      this.data1.push(ele)
      this.bharat=false
      this.bharat1 = true
      this.bharat2= false
    }
    
   })  
  }
  
  sunny() {
    this.todos.forEach((ele)=> {
      if(ele.completed == false) {
        this.data2.push(ele)
        this.bharat=false
      this.bharat1 = false
      this.bharat2= true
      }
    })
  }

}
