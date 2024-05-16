import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit , Output, SimpleChanges, ViewChild } from '@angular/core';
import { HomeloadingService } from '../homeloading.service';
import { ZCartList } from '../z-cart-list';
import { Router } from '@angular/router';
import { cart_qty } from '../cart_qty';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  childMsg: string='';
  calculate: number=0;
  total: number=0;
  price: number=0;
  inputNumber:number=0;
  constructor(private router:Router,private hmeload:HomeloadingService) {}
  zcart:ZCartList[]= [];
  qtycart:cart_qty[]=[];

  
  ngOnInit(){
    this.hmeload.getlist_Cart().subscribe(data=>{this.qtycart=data});
  //   this.zcart.forEach(item => {
  //    alert("this is name"+item.name)
  //     console.log(item.name);
  //   this.hmeload.getcount({product_id:"Prod"+item.name}).subscribe(data=>this.product_count=data)
  // }); })

  }

  second(){
    
  }
  onButtonClick(prod_order:number): void {
 
  }


  
  clearInput(){

    this.inputNumber=0;
   
    
  }
  ngOnChanges(): void {
    alert("hi da")
    // this.hmeload.currentPage="component6"
    // this.childMsg = this.hmeload.currentPage;
    

   }

   @Output() eventEmitter = new EventEmitter<string>();
   toggleComponent(component: string) {
    this.eventEmitter.emit(this.childMsg)
  }

  getNumber(str:string):number{
    return parseInt(str);
  }
}
  
    
  


     

