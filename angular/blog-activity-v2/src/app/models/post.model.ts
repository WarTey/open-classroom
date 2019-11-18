export class Post {
    title: string;
    content: string;
    loveIts: number;
    createdAt: string;

    constructor(title: string, content: string, loveIts: number, createdAt: string) {
        this.title = title;
        this.content = content;
        this.loveIts = loveIts;
        this.createdAt = createdAt;
    }
}
