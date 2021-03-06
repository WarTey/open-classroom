import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
    isAuth: boolean;

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit() {
        firebase.auth().onAuthStateChanged(
            (user) => {
                this.isAuth = !!user;
            }
        );
    }

    onSignOut() {
        this.authService.signOut();
        this.router.navigate(['']);
    }
}
