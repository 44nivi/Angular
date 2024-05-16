import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ZCartList } from './z-cart-list';
import { Cart } from './cart';
import { cart_qty } from './cart_qty';

@Injectable({
  providedIn: 'root'
})
export class HomeloadingService {
  
 
  currentPage: string = 'Appcomponent';

  baseURL = "http://localhost:8080/getset";
  fetchurl="http://localhost:8080/fetch"
  searchurl="http://localhost:8080/search"
  //carturl="http://localhost:8080/quantity"
  cart_load_url="http://localhost:8080/load_cart"
  cart_qt="http://localhost:8080/quantity"
  qty_count="http://localhost:8080/counter"

  constructor(private http:HttpClient) { }
  
  getcount(count: Object ) {
    return this.http.post<number>(this.qty_count,count)
  }

  getquantity(quantity:Object) {
    return this.http.post<cart_qty[]>(this.cart_qt,quantity);
  }
  getlist(){
    return this.http.get<ZCartList[]>(this.baseURL);
  }
  
  getlist_Cart(){
    return this.http.get<cart_qty[]>(this.cart_load_url)
    
  }
  getwomenlist(){
    return this.http.post<ZCartList[]>(this.fetchurl,{"gender":"women"});
  }

  getmenlist(){
    return this.http.post<ZCartList[]>(this.fetchurl,{"gender":"men"});
  }

  getkidslist(){
    return this.http.post<ZCartList[]>(this.fetchurl,{"gender":"kids"});
  }

  getaccessorieslist(){
    return this.http.post<ZCartList[]>(this.fetchurl,{"gender":"accessories"});
  }

  getsearchlist(finds:Object){
    return this.http.post<ZCartList[]>(this.searchurl,finds);
  }
  
  addcart(addcart:Object){
    return this.http.post<cart_qty[]>(this.cart_qt,addcart);

  }

}
