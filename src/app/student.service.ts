import { Injectable } from '@angular/core';
import { Student } from './student';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  // students:Student[] = [];
  baseURL = "http://localhost:8080/students";

  constructor(private http:HttpClient) { }

  addStudent(student:Student){
    // this.students.push(student);
    return this.http.post<Student>(this.baseURL+"/addStudent",student);
  }
  
  // updateStudent(student:Student){
  //   this.students = this.students.filter(s=>s.rollNo != student.rollNo)
  //   this.students.push(student);
  // }

  getStudents(){
    return this.http.get<Student[]>(this.baseURL);
  }
}
