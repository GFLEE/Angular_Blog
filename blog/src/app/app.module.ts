import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { SummaryComponent } from './summary/summary.component';
import { ArchiveComponent } from './archive/archive.component';
import { DetailComponent } from './detail/detail.component';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';

// import { RouterModule } from '../app/app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    SummaryComponent,
    ArchiveComponent,
    DetailComponent,
  ],
  imports: [AppRoutingModule, BrowserModule, InfiniteScrollModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
