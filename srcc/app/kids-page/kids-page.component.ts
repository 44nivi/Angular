import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HomeloadingService } from '../homeloading.service';
import { ZCartList } from '../z-cart-list';
import { Cart } from '../cart';

@Component({
  selector: 'app-kids-page',
  templateUrl: './kids-page.component.html',
  styleUrls: ['./kids-page.component.css']
})
export class KidsPageComponent {
  @Input() logosrc:string ='';   
  @Input() Homeimage:string='';
  @Input() cartimage:string='';
  @Input()  bgimage:String='';
  @Input() bgimage3:String='';
  @Input() userimage:String='';

  constructor(private hmeload:HomeloadingService) {}
  zcart:ZCartList[]= [];

  ngOnInit(): void {
    this.hmeload.getkidslist().subscribe(data=>
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
 product: Cart[]=[];
 prod: string='';
  addProductToCart(product:Cart){
    this.product.push(product)
    this.prod=JSON.stringify(this.product)  //Stringify the object to string 
    alert(this.prod)
    this.hmeload.addcart({add:this.prod}).subscribe(data=>this.zcart=data);
  }
}

