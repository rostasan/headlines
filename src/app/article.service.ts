import { environment } from './../environments/environment';
import { Article } from './article';
import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class ArticleService {

  constructor(
    private http: Http
  ) { }
  public getArticles(): Promise<Article[]> {
    const params = new URLSearchParams();
    params.set('apiKey', environment.newsApiKey);
        params.set('source', 'associated-press');
    return this.http
      .get(`${environment.baseURL}/v1/articles`, {
                  search: params
                })
                .toPromise()
                .then(resp => resp.json())
                .then(json => json.articles)
                .then(articles => {
                  return articles
                  .map(article =>
                    Article.fromJSON(article));
                })
                .catch(err => {
                  console.log('we have an error', err);
                });

  }

}
