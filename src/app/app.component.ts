import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-root',
  // template:"<h1>I am inline</h1>",
  templateUrl: './app.component.html',
 styleUrls: ['./app.component.css'],
 //styles:['h1{color:green}']
})
export class AppComponent {
  title = 'Thryaksh';
  srctitle = "../assets/images/df.PNG";
  flag = false;
 
  changeSpecificTitle(val:string){
    this.title = val;
  }
  
}
