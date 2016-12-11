import { Component, Pipe, PipeTransform, ChangeDetectorRef } from '@angular/core';
import { SitemenuComponent } from '../sitemenu/sitemenu.component';
import { PostsServices } from '../services/Posts.service';
import { SharedServices } from '../services/sharedservices.service';
import { Router } from '@angular/router';

@Component({
    selector: 'home',
    providers: [SitemenuComponent],
    moduleId: module.id,
    templateUrl: '../../partials/home.component.html'
})
export class HomeComponent {
    posts: any[];

    constructor(private router: Router, private postsservice: PostsServices, private sharedServices: SharedServices) { }

    ngOnInit() {
        this.postsservice.getPosts().subscribe(postsdata => {
            this.posts = postsdata.posts.row;
            console.log(postsdata.posts.row);
        });
    }

    PostDetails(Id: number, post: any) {

        this.sharedServices.setSelectedPost(post);
        this.router.navigate(['postdetails', Id]);
    }

    vote(Id: number, type: string) {
        var voteitem = localStorage.getItem(Id.toString());
        if (voteitem === undefined || voteitem === null) {
            if (type === "up") localStorage.setItem(Id.toString(), "1|0");
            if (type === "down") localStorage.setItem(Id.toString(), "0|1");
        }
        else {
            if (type === "up") {
                var upcount = +voteitem.split('|')[0] + 1;
                localStorage.setItem(Id.toString(), upcount.toString() + "|" + voteitem.split('|')[1]);
            }
            if (type === "down") {
                var downcount = +voteitem.split('|')[1] + 1;
                localStorage.setItem(Id.toString(), voteitem.split('|')[0] + "|" + downcount.toString());
            }
        }
    }

    getvotecount(Id: number, type: string) {
        var voteitem = localStorage.getItem(Id.toString());

        if (voteitem === undefined || voteitem === null) {
            return "0";
        }
        else {
            if (type === "up") return voteitem.split('|')[0];
            if (type === "down") return voteitem.split('|')[1];
        }
    }

}
