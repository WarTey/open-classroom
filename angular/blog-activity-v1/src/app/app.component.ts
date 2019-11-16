import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    posts: Post[] = [
        new Post('Mon premier post', 'Content premier post', 0, new Date()),
        new Post('Mon deuxième post', 'Content deuxième post', 0, new Date()),
        new Post('Encore un post', 'Content dernier post', 0, new Date())
    ];
}
