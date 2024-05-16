import { Component } from '@angular/core';
import { Cart } from './cart';
import { HomeloadingService } from './homeloading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'z-cart';
  logosrc="../assets/2.png"
  Homeimage="../assets/homebutton.png"
  cartimage="../assets/cart.png"
  bgimage="../assets/2.png"
  bgimage3="../assets/stand.jpg"
  userimage="../assets/user1.jpg"
  constructor(private hmeload:HomeloadingService) {}
ngOnInit(): void {
  this.hmeload.currentPage = 'component1';
  this.childMsg = this.hmeload.currentPage;
}
  visibleComponent: string = ''; 
  toggleComponent(component: string) {
    this.visibleComponent = component;
}
childMsg: string = "";
getMsgFromChild(msg:string){
  this.childMsg = msg;
  alert(this.childMsg)
}
 cartmsgs: Cart[]=[];
 msgtocart(cartmsg:Cart){
 this.cartmsgs.push(cartmsg);
 console.log(this.cartmsgs)

 }


 
}