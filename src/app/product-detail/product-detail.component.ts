import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  public count = 0

  plusCount() {
    this.count++
  }
  Count() {
    if (this.count > 0)
      this.count--
  }
}
