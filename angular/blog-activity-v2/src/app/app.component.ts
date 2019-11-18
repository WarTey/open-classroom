import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    constructor() {
        const firebaseConfig = {
            apiKey: 'AIzaSyArZQKwHoOw4E8aBkU5O7vNdJK32Oi2i2o',
            authDomain: 'blogactivityv2.firebaseapp.com',
            databaseURL: 'https://blogactivityv2.firebaseio.com',
            projectId: 'blogactivityv2',
            storageBucket: 'blogactivityv2.appspot.com',
            messagingSenderId: '844830188513',
            appId: '1:844830188513:web:5efee5d1bf6d14379768a0'
        };
        firebase.initializeApp(firebaseConfig);
    }

    ngOnInit() { }
}
