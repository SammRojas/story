import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Product } from './interfaces/product.interface';
import { ProductsService } from './services/products.service';
import { ShoppingCardtService } from '../../shared/services/shoping-card.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products! : Product[]
  constructor(
    private productSvc:ProductsService,
    private shoppingCartSvc : ShoppingCardtService    
  ) { }

  ngOnInit(): void {
    this.productSvc.getProducts().pipe(
      tap((products: Product[]) => this.products=products)
    ).subscribe()
  }
  addToCard(product : Product):void{
    console.log('Add to card', product);
    this.shoppingCartSvc.updateCart(product)
  }

}
