import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { LoginComponent } from './pages/login/login.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { AboutComponent } from './pages/about/about.component';
import { StartComponent } from './pages/start/start.component';
import { CategoryComponent } from './pages/category/category.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:'blog/:id',
    component:BlogComponent
  },
  {
    path:'blogs',
    component:BlogsComponent
  },
  
  {
    path:'recipe',
    component:RecipeComponent
  },
 
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'',
    component:SignupComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  
  {
    path:'favorites',
    component:FavoritesComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'start',
    component:StartComponent
  },
  {
    path:'category/:category',
    component:CategoryComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
