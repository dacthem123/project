import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService{
  trendyProducts() {
    throw new Error('Method not implemented.');
  }
  popularProducts() {
    throw new Error('Method not implemented.');
  }
  searchProduct(query: string | null):Observable<any[]>  {
    // throw new Error('Method not implemented.');
    return of([{test: 12}])
  }
  getCategories(): Observable<string> {
    return of("123")
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
