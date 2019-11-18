import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;
import { Post } from '../models/post.model';

@Injectable()
export class PostsService {
    private posts: Post[] = [];
    postsSubject = new Subject<Post[]>();

    constructor() {
        this.getPosts();
    }

    emitPosts() {
        this.postsSubject.next(this.posts.slice());
    }

    addPost(title: string, content: string) {
        this.posts.push(new Post(title, content, 0, new Date().toString()));
        this.savePosts();
        this.emitPosts();
    }

    removePost(post: Post) {
        const postIndexToRemove = this.posts.findIndex(
            (postEl) => {
                if (postEl === post) {
                    return true;
                }
            }
        );
        this.posts.splice(postIndexToRemove, 1);
        this.savePosts();
        this.emitPosts();
    }

    editLove(index: number, add: boolean) {
        this.posts[index].loveIts += add ? 1 : -1;
        this.emitPosts();
        firebase.database().ref('/posts').set(this.posts);
    }

    savePosts() {
        firebase.database().ref('/posts').set(this.posts);
    }

    getPosts() {
        firebase.database().ref('/posts').on('value', (data: DataSnapshot) => {
            this.posts = data.val() ? data.val() : [];
            this.emitPosts();
        });
    }
}
