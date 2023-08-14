import { Component } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { CartService } from '../service/cart.service';
import { IListCartItems } from './contact.component.i';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../service/user.service';
import { ICart } from '../service/cart.service.i';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  public productList: any = [{
    id: "1",
    name: "miổ",
    price: 15000,
    quantity: 1,
    img: "assets/image/miổ.jpg"
  },
  {
    id: "2",
    name: "Nho",
    price: 55000,
    quantity: 1,
    img: "assets/image/nho-ngon-tay.jpg"
  },
  {
    id: "3",
    name: "hutieu",
    price: 25000,
    quantity: 1,
    img: "assets/image/hutieu.jpg"
  },
  {
    id: "4",
    name: "phở",
    price: 30000,
    quantity: 1,
    img: "assets/image/phở.jpg"

  }];
  totalAngularPackages: any;
  searchVal = "";
  productListTemp: any = []
  constructor(private h: HttpClient, private cartService: CartService, private userService: UserService) { }
  hoten: any;
  diachi: any;
  item: any;
  dienthoai: any;
  email: any;

  addtocart(item: IListCartItems) {
    console.log('ok', item);
    // debugger;
    //du liệu
    //...item sao chép biến mới 
    this.cartService.addtocart({ ...item });
  }

  themGioHang() {

  }
  //hiển thị danh sách danh sách sản phẩm
  //lấy dữ liệu từ mockAPI
  ngOnInit() {
    // Simple GET request with response type <any>
    this.h.get<any>(`https://647fed01f061e6ec4d486b14.mockapi.io/products`).subscribe((data: { total: any; }) => {
      this.totalAngularPackages = data.total;
      //lọc giá trị  this.productList = data;
      //thay đổi sản phẩm  this.productListTemp = data;
      this.productList = data;
      this.productListTemp = data;
      console.log("---data", this.productList);


    })
  }


  //thanh-toan.component.ts
  //luu đon hàng
  taodonhang(item: any) {
    this.h.post("http://localhost:3000/donhang", item)
      .subscribe((data) => {
        console.log('this.thanhtoan', data);
        return data
      })

  }//taodonhang
  //thay đổi giá trị
  changeSearchVal() {
    console.log('changeSearchVal',);

    this.productListTemp = this.productList.filter((item: any) => item.name.includes(this.searchVal))
  }
}
