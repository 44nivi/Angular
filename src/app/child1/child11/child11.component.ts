import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/student';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-child11',
  templateUrl: './child11.component.html',
  styleUrls: ['./child11.component.css']
})
export class Child11Component implements OnInit {
  // @Input() parentMsg:string ='';

  // msgToParent = 'Hai Parent';
  students:Student[] = [];
  constructor(private router:Router,private studSvc:StudentService ) {
    
  }
  ngOnInit(): void {
   // this.students = this.studSvc.getStudents();
   this.studSvc.getStudents().subscribe(data=>
    {
      this.students = data;
    })
  }

  // @Output() eventEmitter = new EventEmitter<string>();
  
  // sendMsg(){
  //   this.eventEmitter.emit(this.msgToParent)
  // }

  goBack(){
    this.router.navigate(['/child1'])
  }
}
