import { Category } from './../site-framwork/sidebar/category';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products-service';
import { product } from './search.component.i';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
 
export class SearchComponent implements OnInit {

  SearchResult:undefined|product[]
  constructor(private  activatedRoute: ActivatedRoute, private product:ProductsService) {}

  ngOnInit(): void {
    let query = this.activatedRoute.snapshot.paramMap.get('query');
      console.warn(query)
       true && this.product.searchProduct(query).subscribe((result: product[] | undefined)=>{
        this.SearchResult=result;
        console.log('this.search', this.SearchResult);
        
      })
  }

}
