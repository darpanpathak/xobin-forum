import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './common/auth.guard';
import { AUTH_PROVIDERS } from 'angular2-jwt/angular2-jwt.js';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { loginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SitemenuComponent } from './sitemenu/sitemenu.component';
import { PostDetailsComponent } from './PostDetails/PostDetails.component';
import { routing } from './app.routes';
import { AuthenticationService } from './services/authentication.service';
import { PostsServices } from './services/Posts.service';
import { SharedServices } from './services/sharedservices.service';

import { Ng2PaginationModule } from 'ng2-pagination';
import { TagsPipe } from './Pipes/tags.pipe';
import {nvD3} from 'ng2-nvd3';

@NgModule({
    imports: [BrowserModule, RouterModule, routing, HttpModule, FormsModule, Ng2PaginationModule],
    declarations: [AppComponent, loginComponent, HomeComponent, SitemenuComponent, PostDetailsComponent, TagsPipe, nvD3, ChartComponent, AboutComponent],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, AUTH_PROVIDERS, AuthGuard, AuthenticationService, PostsServices, SharedServices],
    bootstrap: [AppComponent]
})
export class AppModule { }
