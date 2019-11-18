import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Subscription } from 'rxjs';
import { Post } from '../models/post.model';

@Component({
    selector: 'app-post-list-component',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit, OnDestroy {
    posts: Post[];
    postSubscription: Subscription;

    constructor(private postService: PostsService) { }

    ngOnInit() {
        this.postSubscription = this.postService.postsSubject.subscribe(
            (posts: Post[]) => {
                this.posts = posts;
            }
        );
        this.postService.emitPosts();
    }

    ngOnDestroy() {
        this.postSubscription.unsubscribe();
    }
}
