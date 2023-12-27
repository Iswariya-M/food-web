import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './pages/contact/contact.component';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { FavoritesService } from './favorites.service';
import { BlogService } from './blog.service';
import { AboutComponent } from './pages/about/about.component';
import { StartComponent } from './pages/start/start.component';
import { CategoryComponent } from './pages/category/category.component';
import { SignupComponent } from './signup/signup.component';
@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    BlogsComponent,
    ContactComponent,
    RecipeComponent,
    LoginComponent,
    FavoritesComponent,
    AboutComponent,
    StartComponent,
    CategoryComponent,
    SignupComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    CommonModule,
 
    MatIconModule
  
  

  ], 
  providers: [FavoritesService,BlogService],
  bootstrap: [AppComponent],
  exports:[MatIconModule]
})
export class AppModule { }
