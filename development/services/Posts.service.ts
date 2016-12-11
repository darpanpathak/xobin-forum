import { Injectable } from '@angular/core';
import { contentHeaders } from '../common/headers';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt/angular2-jwt.js';

@Injectable()
export class PostsServices {
    constructor(private authHttp: AuthHttp) { }

    getPosts() {
        return this.authHttp.get('/api/getPosts', { headers: contentHeaders })
            .map(res => res.json());
    }

    getPostDetails(Id: number) {

        return this.authHttp.get('/api/getPostDetails/' + Id, { headers: contentHeaders })
            .map(res => res.json());
    }

    getChartData()
    {
        return this.authHttp.get('/api/gettagscount/', { headers: contentHeaders })
            .map(res => res.json());
    }
}