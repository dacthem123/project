import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICart, IProduct } from './cart.service.i';
import { HttpClient } from '@angular/common/http';
import { IListCartItems } from '../contact/contact.component.i';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  donhang: { total: any; } | undefined;
  thanhtoan: any;

  luuChiTietDonhang //647fed01f061e6ec4d486b14.mockapi.io/products`)
    (idDH: number, item: ICart) {
      throw new Error('Method not implemented.');
  }
  themGioHang(arg0: { name: string; price: number; quantity: number; img: string; id: string; }) {
    throw new Error('Method not implemented.');
  }
  http: any;
  totalAngularPackages: any;
  hoten:any;
  diachi:any;
  item:any;
  dienthoai:any;
  email:any;
  removeFromCart(item: CartService) {
    throw new Error('Method not implemented.');
  }
  // getItems(): CartService[] | undefined {
  //   throw new Error('Method not implemented.');
  // }

  public cartItemList: IListCartItems[] = [];
  public productList = new BehaviorSubject<IListCartItems[]>([]);

  //giỏ hàng
  constructor( private h:HttpClient,private cartService: UserService) {}
  items: ICart[] = [];
  addToCart(sp: IProduct) {    
    var c:ICart;
    c = { 
      idsp: sp.id, 
      tensp: sp.tensp, 
      giasp: sp.giasp, 
      hinh: sp.hinh, 
      soluong:1 
    }
    this.items.push(c); 
  }
  getItems() { return this.items; }
  clearCart() { this.items = []; return this.items;}



  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

    //dữ liệu add them giỏ hang
  addtocart(product: IListCartItems) {

    const index = this.cartItemList.findIndex(item => item.name === product.name)
    if(index >= 0) {
      this.cartItemList[index].quantity += product.quantity
    } else {
      this.cartItemList.push(product);
      // this.h.post("http://localhost:3000/loaisp",product)
      // .subscribe((data) => {
      //    console.log('this.loai',data);
      //    return data
      // })
    }

    this.productList.next(this.cartItemList);
    // this.getTotalPice();
  }

  getTotalPice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
    });
    return grandTotal;
  }
  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    });
    this.productList.next(this.cartItemList);
  }
  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }

  taoDonHang(hoten:string, diachi:string, dienthoai:string, email:string){
    this.h.post("http://localhost:3000/donhang",{hoten, diachi,dienthoai,email})
    .subscribe((data) => {
       console.log('this.thanhtoan',data);
       return data
    })
  
  }


  //mockAPI lấy ra dữ liệu
  ngOnInit() {      
  // Simple GET request with response type <any>
    this.h.get<any>(`https://647fed01f061e6ec4d486b14.mockapi.io/products`)
    .subscribe((data: { total: any; }) => {
        this.donhang = data;
        console.log('this.donhang', data);
        
    })
}



//cart.service.ts
//thanh-toan.component.ts
// body: any;
//  ok: boolean | undefined;
//   statusText: any;
// taodonhang(){
//   this.cartService.taoDonHang(this.hoten,this.diachi,this.dienthoai,this.email).subscribe(
//     (       response: { body: any; ok: boolean; statusText: any; }) => {
//          console.log(response); 
//          console.log(response.body); //trong body có biến id của order mới chèn
//          console.log(response.ok); //biến od=k =true là request ok
//          //lấy id của đơn hàng mới + lưu các sản phẩm trong cart lên server
//          if (response.ok==false) { 
//             alert(response.statusText); //hiện lỗi
//          } else {
//            let body:any = response.body; let idDH:number = Number(body.id); 
//            this.cartService.items.forEach( 
//              ( item: any)  => this.cartService.luuChiTietDonhang( idDH,  item).subscribe( res => console.log(res))
//            )
//          }//else
//          location.href="/";
//        }
//    );
//   }//taodonhang
  



}
