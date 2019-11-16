import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
    selector: 'app-post-list-item-component',
    templateUrl: './post-list-item-component.component.html',
    styleUrls: ['./post-list-item-component.component.css']
})

export class PostListItemComponentComponent implements OnInit {
    @Input() post: any;
    @Input() index;

    constructor(private postService: PostService) { }

    ngOnInit() { }

    getStatus() {
        return this.post.loveIts > 0 ? 'list-group-item-success' : this.post.loveIts < 0 ? 'list-group-item-danger' : null;
    }

    postDelLove() {
        this.postService.editLove(this.index, false);
    }

    postAddLove() {
        this.postService.editLove(this.index, true);
    }
}
