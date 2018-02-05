import { Component } from "@angular/core";
import { Article } from "./article/article.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article("angular2", "https//localhost:4200", 3),
      new Article("vue2", "https//localhost:4201", 23),
      new Article("react2", "https//localhost:4202", 1),
      new Article("bootstrap2", "https//localhost:4203", 15)
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title:${title.value} , link:${link.value}`);
    this.articles.push(new Article('New title', "http://localhost", 0));

    title.value = "";
    link.value = "";
    
    return false;
  }

  sortedArticles():Article[]{

  return this.articles.sort((a:Article,b:Article) => a.votes-b.votes);
  
  }

}
