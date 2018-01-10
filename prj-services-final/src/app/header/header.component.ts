import { DataStorageService } from './../shared/data-storage.service';
import { Component } from '@angular/core';
import { Response } from '@angular/http/src/static_response';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private dataStorageService:DataStorageService) {}

  onSaveData(){
    this.dataStorageService.storeRecpies()
    .subscribe(
      (response: Response) => {
        console.log(response);       
      }
    );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }
}
