import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritesService } from '../../favorites.service';
import { BlogService } from '../../blog.service';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent  implements OnInit {
 

    blogItems!: any[];
    filteredBlogItems: any[] = []; // Updated array to store filtered blog items
    item: string = '';
    favorites: any[] = [];
    showFavorites: boolean = false;
  
    
    constructor(private router: Router, private favoritesService: FavoritesService,private blogService: BlogService) {}
  
    ngOnInit(): void {
      this.blogService.getBlogItems().subscribe(blogItems => {
        this.blogItems = blogItems;
        this.filteredBlogItems = blogItems; // Initialize filteredBlogItems with all blog items
      });
    }
  
  
 
    
      
    
  
    addToFavorites(item: any): void {
      this.favoritesService.addToFavorites(item);
    }
    
  
    viewFavorites(): void {
      this.router.navigate(['/favorites']);
    }
  }


