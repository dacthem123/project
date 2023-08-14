import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor( private cartService : CartService){ 
  }

  tongdoluong(){
    let tsl:number=0;
    this.productCarts.forEach((item: any) => {tsl += item.price * item.quantity;})

    return tsl;
  }

  public productCarts:any = [];
  public tong = 0;
  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res: any) => {
      this.productCarts = res
    })
  }
  
}
function tongdoluong() {
  throw new Error('Function not implemented.');
}

