import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin =2;
  showImage:boolean = false;
  //listFilter:string = 'cart';
  private _listFilter: string='';
  get listFilter():string{
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter = value;
    console.log('In setter:',value);
    this.filteredProducts = this.performFilter(value);
  }
  filteredProducts: IProduct[]= [];
  products: IProduct[] = [
    {
      productId: 1,
      productName: 'Leaf Rake',
      productCode: 'GDN-0011',
      releaseDate: 'March 19, 2021',
      description: 'Leaf rake with 48-inch wooden handle.',
      price: 19.95,
      starRating: 3.2,
      imageUrl: 'assets/images/leaf_rake.png',
    },
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2021',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      starRating: 4.5,
      imageUrl: 'assets/images/garden_cart.png',
    }
  ];

  performFilter(filterBy:string):IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product:IProduct)=> product.productName.toLocaleLowerCase().includes(filterBy));
  }
 toggleImage():void {this.showImage = !this.showImage;}
 ngOnInit(): void {
  // console.log('In oninit');
 this.listFilter = 'cart';
 }

}