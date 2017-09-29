import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {

loadedfeature   = 'recipe';

onNavigate(feature1 :string){

this.loadedfeature = feature1;
}

  
}
