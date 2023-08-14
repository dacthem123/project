import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor( private cartService : CartService){ }
//add thêm gio hang
  public productCarts = []
  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res: any) => {
      console.log('product so luong-------------', res, res.length);
      this.productCarts = res
    })
  }
  
}
