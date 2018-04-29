import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public id: string;
  article: Article;
  articles: Article[];
  // article: Article = new Article();
  constructor(
    private articleService: ArticleService,
    // private routing: AppRoutingModule
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        console.log(this.id);
      }
    );
    this.articles = this.articleService.getArticles();
    this.getArticle();
  }

  getArticle(): void {

    // tslint:disable-next-line:radix
    const _id = parseInt(this.id);
    console.log(_id);

    this.article = this.articles[_id - 1];
  }
}
