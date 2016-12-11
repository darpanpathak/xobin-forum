import { Component } from '@angular/core';
import { SitemenuComponent } from '../sitemenu/sitemenu.component';
import { PostsServices } from '../services/Posts.service';
import { ActivatedRoute } from '@angular/router';
import { SharedServices } from '../services/sharedservices.service';

@Component({
    selector: 'postdetails',
    providers: [SitemenuComponent],
    moduleId: module.id,
    templateUrl: '../../partials/postdetails.component.html'
})
export class PostDetailsComponent {
    post: any[];
    comments: any[];
    private sub: any;      // -> Subscriber
    private mode: number;

    constructor(private postsservice: PostsServices, public route: ActivatedRoute, public sharedServices: SharedServices) { }

    ngOnInit() {

        this.post = this.sharedServices.getSelectedPost();
        console.log(this.post);

        this.sub = this.route
            .params
            .subscribe(params => {
                // Récupération des valeurs de l'URL
                this.mode = params['Id']; // --> Name must match wanted paramter
            });

        this.postsservice.getPostDetails(this.mode).subscribe(postsdata => {
            this.comments = postsdata;
        });
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
