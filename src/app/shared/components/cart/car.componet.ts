import { Component, OnInit } from '@angular/core';
import { ShoppingCardtService } from '../../services/shoping-card.service';

@Component({
  selector: 'app-cart',
  template: `
    <ng-container
      *ngIf="{ total: total$ | async, quantity: quantity$ | async } as dataCart"
    >
      <mat-icon>add_shopping_cart</mat-icon>
      <ng-container *ngIf="dataCart.total">
        {{ dataCart.total | currency }}
        ({{ dataCart.quantity }})
      </ng-container>
    </ng-container>
  `,
})
export class CartComponent {
  quantity$ = this.shoppingCardSvc.quantityAction$;
  total$ = this.shoppingCardSvc.totalAction$;
  cart$ = this.shoppingCardSvc.cartAction$;
  constructor(private shoppingCardSvc: ShoppingCardtService) {}
}
