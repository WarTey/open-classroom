export class PostService {
    posts = [
        {
            title: 'Premier article',
            content: 'Content premier',
            loveIts: 0,
            createdAt: new Date()
        },
        {
            title: 'Deuxième article',
            content: 'Content deuxième',
            loveIts: 0,
            createdAt: new Date()
        },
        {
            title: 'Troisème article',
            content: 'Content troisième',
            loveIts: 0,
            createdAt: new Date()
        }
    ];

    editLove(index: number, add: boolean) {
        if (add) {
            this.posts[index].loveIts += 1;
        } else {
            this.posts[index].loveIts -= 1;
        }
    }
}
