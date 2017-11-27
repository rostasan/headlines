import { Article } from './../article';
import { Component, OnInit, Input } from '@angular/core';





@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

    // instance variables
    @Input() article: Article;


    constructor() {}

   upvote() {
     this.article.voteUp();
   }

   downvote() {
     this.article.voteDown();
   }


  ngOnInit() {

  }
}
