import { Component, OnInit } from '@angular/core';
//import { CartService } from '../cart.service';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../service/cart.service';
import { UserService } from '../service/user.service';
import { ICart } from '../service/cart.service.i';
@Component({
  selector: 'app-thanh-toan', 
  templateUrl: './thanh-toan.component.html',
  styleUrls: ['./thanh-toan.component.css']
})
export class ThanhToanComponent implements OnInit{
  hoten:string ="";
  email:string ="";
  diachi:string ="";
  dienthoai:string ="";
  productList = []
  constructor(private cartservice: CartService,
    private h:HttpClient){}
  ngOnInit(): void {
    this.h.get<any>(`https://647fed01f061e6ec4d486b14.mockapi.io/products`).subscribe((data) => {
      this.productList = data;
      console.log("---data", this.productList);
      
      
  })
  }
  
  //các hàm
  submit(data:any){
    data.sanpham = this.productList
    this.h.post("http://localhost:3000/donhang",data)
    .subscribe((data) => {
       console.log('this.thanhtoan',data);
       return data
    })
  
    
    // this.cartservice.taoDonHang(this.hoten,this.diachi,this.dienthoai,this.email).subscribe(
    //   (response: any) => {
    //        console.log(response); 
    //       //  console.log(response.body); //trong body có biến id của order mới chèn
    //       //  console.log(response.ok); //biến od=k =true là request ok
    //       //  //lấy id của đơn hàng mới + lưu các sản phẩm trong cart lên server
    //       //  if (response.ok==false) { 
    //       //     alert(response.statusText); //hiện lỗi
    //       //  } else {
    //       //    let body:any = response.body; let idDH:number = Number(body.id); 
    //       //    this.cartservice.items.forEach( 
    //       //      (item: any) => this.cartservice.luuChiTietDonhang(idDH,  item).subscribe( res => console.log(res))
    //       //    )
    //       //  }//else
    //       //  location.href="/";
    //    }
    //  );
    }//taodonhang
}
