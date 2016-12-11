import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './common/auth.guard';

import { AppComponent } from './app.component';
import { loginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ChartComponent } from './chart/chart.component';
import { PostDetailsComponent } from './PostDetails/PostDetails.component';

// Route Configuration
export const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'postdetails/:Id', component: PostDetailsComponent, canActivate: [AuthGuard] },
  { path: 'chart', component: ChartComponent, canActivate: [AuthGuard] },
  { path: 'login', component: loginComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);