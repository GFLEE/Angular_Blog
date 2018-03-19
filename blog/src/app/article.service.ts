import { Injectable } from '@angular/core';
import { articles } from '../app/articlesArray';
import { Article } from './article';

@Injectable()
export class ArticleService {
  articles: Article[];
  constructor() { }


  getArticles(): Article[] {

    return articles;

  }

}
