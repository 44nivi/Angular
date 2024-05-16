import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HomeloadingService } from '../homeloading.service';
import { ZCartList } from '../z-cart-list';
import { Cart } from '../cart';
import { Router } from '@angular/router';
import { cart_qty } from '../cart_qty';
@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent {
  @Input() logosrc:string ='';   
  @Input() Homeimage:string='';
  @Input() cartimage:string='';
  @Input()  bgimage:String='';
  @Input() bgimage3:String='';
  @Input() userimage:String='';
  
  constructor(private router:Router,private hmeload:HomeloadingService) {}
  zcart:ZCartList[]= [];
  
  ngOnInit(): void {
    // this.students = this.studSvc.getStudents();
    this.hmeload.getlist().subscribe(data=>
     {
      alert("received data.....")
       this.zcart = data;
     })
   }
   visibleComponent: string = ''; // Variable to track which component to show
   
   @Output() eventEmitter = new EventEmitter<string>();
   
  toggleComponent(component: string) {
    this.visibleComponent = component;
    this.eventEmitter.emit(this.visibleComponent)
    this.router.navigate(['/cart-page'])

  }
  myValue: string = ''; // Declare your property to hold the input value
  assignedValue: string = '';
  onKey(event: any){
   this.assignedValue=event.target.value
   this.hmeload.getsearchlist({find:this.assignedValue}).subscribe(data=>this.zcart=data);
  }  

  onclicker(){
  }
 @Output() eventEmit = new EventEmitter();
 product: Cart[]=[];
 newprod: cart_qty[]=[];
 prod: string='';
 id:number=0;
 gender:string='';
 name:string='';
 path:string='';
 prod_order:number=0;

 price:string='';
 product_id:string='';
 quantity:string='';
  addProductToCart(product:Cart){
    this.product.push(product);
    for (var cartItem of this.product) {
      alert(this.product)
      this.name=cartItem.name
      this.id=cartItem.id
      this.gender=cartItem.gender
      this.path=cartItem.path
      this.price=cartItem.price
      this.quantity=cartItem.quantity
      this.product_id="prod"+this.name
      this.newprod=[{id:this.id,gender:this.gender,path:this.path,name:this.name,price:this.price,quantity:this.quantity,product_id:this.product_id,prod_order:this.prod_order}]
      console.log(cartItem); // For example, log each cart item
      this.hmeload.addcart({add:this.newprod}).subscribe(data=>this.newprod=data);
  }
    
  }
}
