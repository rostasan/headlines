import { Article } from './../article';
import { Component, Input, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  @Input() articles: Article[];

 
  constructor(
    private articleService: ArticleService

  ) {}

  ngOnInit() {
    this.articleService
      .getArticles()
      .then(articles => this.articles = articles);
  }

}
