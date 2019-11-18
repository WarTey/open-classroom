import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post.model';

@Component({
    selector: 'app-post-list-item',
    templateUrl: './post-list-item.component.html',
    styleUrls: ['./post-list-item.component.css']
})

export class PostListItemComponent implements OnInit {
    @Input() post: Post;
    @Input() index;

    constructor(private postService: PostsService) { }

    ngOnInit() { }

    getStatus() {
        return this.post.loveIts > 0 ? 'list-group-item-success' : this.post.loveIts < 0 ? 'list-group-item-danger' : null;
    }

    onDeletePost() {
        this.postService.removePost(this.post);
    }

    onDelLove() {
        this.postService.editLove(this.index, false);
    }

    onAddLove() {
        this.postService.editLove(this.index, true);
    }
}
