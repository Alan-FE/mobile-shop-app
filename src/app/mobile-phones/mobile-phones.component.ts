import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { MobileModel } from '../model/mobile.model';
import { DataStorageService } from '../service/data-storage.service';
import { CartService } from '../service/cart.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-mobile-phones',
  templateUrl: './mobile-phones.component.html',
  styleUrls: ['./mobile-phones.component.scss']
})
export class MobilePhonesComponent implements OnInit {
  array: any[] = [];
  data: any;
  auth: any = this.authService.isAuthenticated();

  constructor(private dataStorageService: DataStorageService, 
              private cartService: CartService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.data = this.dataStorageService.readData().subscribe(
      (arr: MobileModel[]) => {
        
        if(arr === null)
          return [];
        for(let i = 0; i < arr.length; i++) {
          this.array.push(arr[i]);
        }
      }
    );
  }

  addPhone(form: NgForm) {
    let name = form.value.name;
    let imgPath = form.value.imgPath;
    let camera = form.value.camera;
    let color = form.value.color;
    let memory = form.value.memory;
    let price = form.value.price;
    let model = new MobileModel(name, imgPath, camera, color, memory, price);
    if(this.auth) {
      this.array.push(model);
      this.dataStorageService.saveData(this.array);
      form.reset();
    } else {
      alert("You need to log in first!");
    }
  }

  removeData(index: number) {
    if(this.auth) {
      this.array.splice(index, 1);
      this.dataStorageService.saveData(this.array);
    } else {
      alert("You need to log in first!")
    }
  }

  addToCart(index: any) {
    if(this.auth) {
      this.cartService.cart.push(this.array[index]);
      this.cartService.add();
    } else {
      alert("You need to log in first!");
    }
  }
}
