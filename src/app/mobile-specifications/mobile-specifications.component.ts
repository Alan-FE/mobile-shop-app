import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../service/data-storage.service';

import { MobileModel } from '../model/mobile.model';

@Component({
  selector: 'app-mobile-specifications',
  templateUrl: './mobile-specifications.component.html',
  styleUrls: ['./mobile-specifications.component.scss']
})
export class MobileSpecificationsComponent implements OnInit {
  fullSpecs: any[] = [];

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.dataStorageService.readData().subscribe(
      (arr: MobileModel[]) => {
        
        if(arr === null)
          return [];
        for(let i = 0; i < arr.length; i++) {
          this.fullSpecs.push(arr[i]);
        }
      }
    );
  }

}
