import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PostService } from './services/post.service';
import { PostListItemComponentComponent } from './post-list-item-component/post-list-item-component.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';

@NgModule({
    declarations: [
        AppComponent,
        PostListItemComponentComponent,
        PostListComponentComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [
        PostService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
