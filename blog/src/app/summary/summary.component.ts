import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  articles: Article[];
  constructor(public articleService: ArticleService) { }

  getData(): Article[] {

    this.articles = this.articleService.getArticles();
    console.log(this.articles);
    return this.articles;
    // this.articleService.getArticles();
  }

  addArticles(): void {


  }
  onScroll(event): void {

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      console.log('At the bottom！', event);
      this.addArticles();

    }

  }

  ngOnInit() {
    this.getData();
  }

}
