import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SummaryComponent } from '../summary/summary.component';
import { ArchiveComponent } from '../archive/archive.component';
import { AboutComponent } from '../about/about.component';
import { DetailComponent } from '../detail/detail.component';

/*specify the relationship of routerLink and the template
*/
const routes: Routes = [

  { path: 'home', component: SummaryComponent },
  { path: 'archives', component: ArchiveComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'articles/:id', component: DetailComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  declarations: []
})
export class AppRoutingModule { }
