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
  array = [];
  // bug array:Article[];push not undefined,
  sum = 3;
  public noMore = true;
  public delay = true;
  public end = false;
  constructor(public articleService: ArticleService) {
    setTimeout(function () {
      this.delay = true;
    }, 700);

  }

  getData(): Article[] {

    this.articles = this.articleService.getArticles();

    return this.articles;
    // this.articleService.getArticles();
  }

  addArticles(start, end): Article[] {

    const len = end - start;

    if ((this.array.length + len) >= (this.articles.length)) {

      console.log('No more');
      this.noMore = false;
      this.end = true;
      return this.array;

    } else {
      for (let i = start; i < end; i++) {
        this.array.push(this.articles[i]);
      }
      console.log(this.array);
      return this.array;

    }

  }
  loadMore(): void {

    const num = this.sum;
    this.sum += 1;
    this.addArticles(num, this.sum);
  }

  ngOnInit() {


    console.log(this.delay);
    this.getData();
    this.addArticles(0, this.sum);
  }

}
