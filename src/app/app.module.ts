import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserService } from "./user.service";
import { AuthService } from "./auth.service";
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { NavComponent } from './layouts/nav/nav.component';
import { PostComponent } from './layouts/post/post.component';
import { ForumComponent } from './forum/forum.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SidebarUserComponent } from './layouts/sidebar-user/sidebar-user.component';
import { BlogComponent } from './user/blog/blog.component';
import { PostsComponent } from './user/posts/posts.component';
import { ProfileComponent } from './user/profile/profile.component';
import { FriendsComponent } from './user/friends/friends.component';
import { AlbumComponent } from './user/album/album.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import * as $ from 'jquery';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AdminComponent } from './admin/admin.component';
import { SidebarAdminComponent } from './admin/component/sidebar-admin/sidebar-admin.component';
import { ContentAdminComponent } from './admin/component/content-admin/content-admin.component';

const appRoutes: Routes = [
    { path: '', component: AppComponent, 
      children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'forum', component: ForumComponent },
        { path: 'user', component: UserComponent,
        children: [
          { path: '', redirectTo: 'blog', pathMatch: 'full' },
          { path: 'blog', component: BlogComponent },
          { path: 'posts', component: PostsComponent },
          { path: 'profile', component: ProfileComponent },
          { path: 'friends', component: FriendsComponent },
          { path: 'album', component: AlbumComponent },
        ]
        },
        { path: 'detail', component: PostDetailComponent },
        
        { path: 'admin', component: AdminComponent }
      ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    NavComponent,
    PostComponent,
    ForumComponent,
    UserComponent,
    SidebarUserComponent,
    BlogComponent,
    PostsComponent,
    ProfileComponent,
    FriendsComponent,
    AlbumComponent,
    PostDetailComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    SidebarAdminComponent,
    ContentAdminComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    UserService,
    AuthService,
    CookieService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
