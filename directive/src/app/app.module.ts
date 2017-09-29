import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { basicDirective} from './directive/directive'
import { AppComponent } from './app.component';
import { NewDirectiveDirective } from './new-directive.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [
    AppComponent
    ,basicDirective, NewDirectiveDirective, UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
