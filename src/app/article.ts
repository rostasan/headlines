interface ArticleJSON {
    title: string;
    url: string;
    votes: number;
    publishedAt: string;
    description: string;
    author: string;
    urlToImage;
}


export class Article {
    public publishedAt: Date;
    // article.fromjson()
    static fromJSON(json: ArticleJSON): Article {
        const article = Object.create(Article.prototype);
        return Object.assign(article, json, {
            votes: json.votes ? json.votes : 0,
            image: json.urlToImage,
            publishedAt: json.publishedAt ?
                new Date (json.publishedAt) :
                new Date()
    });
    }
    constructor(
        public title: string,
        public description: string,
        public link: string,
        public image?: string,
        public votes?: number
    ) {
        this.votes = votes || 0;
        this.publishedAt = new Date();
    }
    public date(): Date {
        return new Date();
    }


    

    public voteUp(): void {
        this.votes = this.votes + 1;
    }

    public voteDown(): void {
        this.votes = this.votes - 1;

    }
}
