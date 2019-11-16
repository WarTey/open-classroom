import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-post-list-item-component',
    templateUrl: './post-list-item-component.component.html',
    styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {
    @Input() post: any;

    constructor() { }

    ngOnInit() { }

    getStatus() {
        return this.post.loveIts > 0 ? 'list-group-item-success' : this.post.loveIts < 0 ? 'list-group-item-danger' : null;
    }

    postNoLove() {
        this.post.loveIts -= 1;
    }

    postLove() {
        this.post.loveIts += 1;
    }
}
