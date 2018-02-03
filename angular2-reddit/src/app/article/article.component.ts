import { Component, OnInit, Input } from "@angular/core";
import { Article } from "./article.model";
@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"],
  host: {
    class: "row"
  }
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;

  // constructor() {
  //  this.article=new Article('ANgular2.0','http://localhost:4200',15)

  // this.title='Angular 2';
  // this.link='http://localhost:4200';
  // this.votes=10;
  //  }

  voteUp(): boolean {
    this.article.votes += 1;
    return false;
  }

  voteDown(): boolean {
    this.article.votes -= 1;
    return false;
  }
  ngOnInit() {}
}
