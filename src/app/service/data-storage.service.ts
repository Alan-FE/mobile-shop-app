import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  saveData(data: any) {
    const token = this.authService.getToken();
      this.httpClient.put('https://mobile-shop-9d9d2.firebaseio.com/mobile.json?auth=' + token, data).subscribe(
        (response) => { 
          console.log(response)
        }
      );  
  }

  readData() {
    return this.httpClient.get('https://mobile-shop-9d9d2.firebaseio.com/mobile.json');
  }

  addCartToServer(cart: any[]) {
    const token = this.authService.getToken();
    
      this.httpClient.put('https://mobile-shop-9d9d2.firebaseio.com/cart.json?auth='+ token, cart).subscribe(
        (response) => {console.log(response),
          (error) => { console.log(error) }
        }
      )
  }
  
  readCart() {
    return this.httpClient.get('https://mobile-shop-9d9d2.firebaseio.com/cart.json');
  }
  
}