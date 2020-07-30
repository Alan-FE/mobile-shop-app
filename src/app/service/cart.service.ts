import { Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { MobileModel } from '../model/mobile.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: any[] = [];

  constructor(public dataStorageService: DataStorageService) { 
      this.dataStorageService.readCart().subscribe(
        (array: MobileModel[]) => {
          if(array === null)
          return [];
          
          for(let i = 0; i< array.length; i++) {
            this.cart.push(array[i]);
          }
        },
          (error) => {console.log(error) }
      )
    }

  add() {
    this.dataStorageService.addCartToServer(this.cart);
    alert("You added phone to the cart")
  }

  delete(i: number) {
    this.cart.splice(i, 1);
    this.dataStorageService.addCartToServer(this.cart);
  }
}
