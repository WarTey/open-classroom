import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-post-add',
    templateUrl: './post-add.component.html',
    styleUrls: ['./post-add.component.css']
})

export class PostAddComponent implements OnInit {
    postForm: FormGroup;

    constructor(private postService: PostsService, private router: Router, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.postForm = this.formBuilder.group({
            title: ['', Validators.required],
            content: ['', Validators.required]
        });
    }

    onSubmit() {
        this.postService.addPost(this.postForm.value.title, this.postForm.value.content);
        this.router.navigate(['']);
    }
}
