import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HomeloadingService } from '../homeloading.service';
import { ZCartList } from '../z-cart-list';
import { Cart } from '../cart';

@Component({
  selector: 'app-accessories-page',
  templateUrl: './accessories-page.component.html',
  styleUrls: ['./accessories-page.component.css']
})
export class AccessoriesPageComponent {
  @Input() logosrc:string ='';   
  @Input() Homeimage:string='';
  @Input() cartimage:string='';
  @Input()  bgimage:String='';
  @Input() bgimage3:String='';
  @Input() userimage:String='';

  constructor(private hmeload:HomeloadingService) {}
  zcart:ZCartList[]= [];
  
  ngOnInit(): void {
    this.hmeload.getaccessorieslist().subscribe(data=>
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
  }
  myValue: string = ''; // Declare your property to hold the input value
  assignedValue: string = '';

  onKey(event: any){
   this.assignedValue=event.target.value
   this.hmeload.getsearchlist({find:this.assignedValue}).subscribe(data=>this.zcart=data);
  }

  @Output() eventEmit = new EventEmitter();
 product!: Object;
 prod: string='';
  addProductToCart(product:Cart){
    this.product=product
    this.prod=JSON.stringify(this.product)  //Stringify the object to string 
    alert(this.prod)
    this.hmeload.addcart({add:this.product}).subscribe(data=>this.zcart=data);
  }
}


