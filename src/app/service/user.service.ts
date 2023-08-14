import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICart } from './cart.service.i';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  items: any;
  postId: any;
  totalAngularPackages: any;
  thanhtoan: any;
  constructor(private h: HttpClient) { }
  getProducts(){
     return this.productList.asObservable();
}
setProduct(product : any ){
    this.cartItemList.push(...product);
    this.productList.next(product);

}
addtocart(product : any ){
  this.cartItemList.push(product);
  this.productList.next(this.cartItemList)
  this.getTotalPice();
  console.log(this.cartItemList)

}
getTotalPice() : number{
  let grandTotal = 0;
  this.cartItemList.map((a:any)=>{
    grandTotal += a.total;
  })
  return grandTotal;
}
removeCartItem(product: any){
  this.cartItemList.map((a:any, index:any)=>{
    if( product.id=== a.id){
      this.cartItemList.splice(index,1);
    }
   })
   this.productList.next(this.cartItemList);


}
removeAllCart(){
  this.cartItemList = []
  this.productList.next(this.cartItemList);

}
//cart.service.ts

luuChiTietDonhang(idDH:number, item:ICart){
  return this.h.post<any>(
    "http://localhost:3000/donhangchitiet",
  {"iddh":idDH,"idsp":item.idsp,"tensp":item.tensp,"giasp":item.giasp,"soluong":item.soluong},
    { observe: 'response' }
  )
  } 
}


      
 


