import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(public cartService: CartService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onDelete(index: number) {
    if(this.authService.isAuthenticated()) {
      this.cartService.delete(index);
    } else {
      alert("You first need to sign in or sign up to remove data")
    }
  }


}
