import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { CasvotComponent } from './casvot/casvot.component';
import { TestService } from './test.service';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CasvotComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
