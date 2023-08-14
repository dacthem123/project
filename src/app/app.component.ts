import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private route: Router) { }
  title = 'project';

  granolaProduct = [
    {
      imgSrc: "assets/image/healthy-3.png",
      id: 1
    },
    {
      imgSrc: "assets/image/healthy-1.png",
      id: 2
    },
    {
      imgSrc: "assets/image/healthy-2.png",
      id: 3
    }
  ]


  onClickProduct(id: number) {
    // code here
    // alert(id);
    console.log('id', id);
    switch (id) {
      case 1:
        this.route.navigateByUrl(`product/1`);
        break;
      case 2:
        this.route.navigateByUrl(`product/1`);
        break;
      case 3:
        this.route.navigateByUrl(`product/1`);
        break;

      default:
        break;
    }


  }
}