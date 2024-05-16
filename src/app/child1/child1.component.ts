import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
  // msgToChild = "CMsg1";
  // childMsg = "XXX";
  // getMsgFromChild(msg:string){
  //   this.childMsg = msg;
  // }

  constructor(private studentSvc:StudentService){}
  
  addStudent(){
    this.studentSvc.addStudent({rollNo:106,name:"Bhuvanai",garde:9.5}).subscribe(data=>alert(data));
  }

 updateStudent(){
//  this.studentSvc.updateStudent({rollNo:103,name:"Karnika",garde:8.4});
  }
}
