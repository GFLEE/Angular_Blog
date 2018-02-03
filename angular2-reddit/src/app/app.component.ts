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
      new Article("one", "https//localhost:4200", 20),
      new Article("two", "https//localhost:4200", 20),
      new Article("three", "https//localhost:4200", 20),
      new Article("four", "https//localhost:4200", 20)
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title:${title.value} , link:${link.value}`);
    this.articles.push(new Article("add_new", "#", 0));
    title.value = "";
    link.value = "";
    return false;
  }
}
