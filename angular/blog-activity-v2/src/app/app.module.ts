import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PostsService } from './services/posts.service';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { PostListComponent } from './post-list/post-list.component';
import { AuthService } from './services/auth.service';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuardService } from './services/auth-guard.service';
import { PostAddComponent } from './post-add/post-add.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';

const appRoutes: Routes = [
    { path: '', component: PostListComponent },
    { path: 'add-post', canActivate: [AuthGuardService], component: PostAddComponent },
    { path: 'connexion', component: SignInComponent },
    { path: 'inscription', component: SignUpComponent },
    { path: 'not-found', component: FourOhFourComponent },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    declarations: [
        AppComponent,
        PostListItemComponent,
        PostListComponent,
        FourOhFourComponent,
        PostAddComponent,
        HeaderComponent,
        SignUpComponent,
        SignInComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [
        PostsService,
        AuthService,
        AuthGuardService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
