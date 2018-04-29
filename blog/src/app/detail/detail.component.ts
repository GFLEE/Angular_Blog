import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { AppRoutingModule } from '../app-routing/app-routing.module';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() article: Article;
  // article: Article = new Article();
  constructor(
    private articleService: ArticleService,
    // private routing: AppRoutingModule
  ) { }

  ngOnInit(): void {
    this.getArticle();
  }

  getArticle(): void {

       
  }
}
