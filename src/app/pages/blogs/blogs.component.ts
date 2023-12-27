import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritesService } from '../../favorites.service';
import { BlogService } from '../../blog.service';
import { SearchService } from '../../search.service';


@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent implements OnInit {

  showResults = false;
  noResults = false;
  blogItems!: any[];
  filteredBlogItems: any[] = []; 
  item: string = '';
  favorites: any[] = [];
  showFavorites: boolean = false;

  
  constructor(private router: Router, private favoritesService: FavoritesService,private blogService: BlogService,private searchService:SearchService) {}

  ngOnInit(): void {
    this.blogService.getBlogItems().subscribe(blogItems => {
      this.blogItems = blogItems;
      this.filteredBlogItems = blogItems; 
    });
  }



search(): void {
  this.filteredBlogItems = this.searchService.search(
    this.blogItems,
    this.item
  );

this.showResults = true;
  

this.noResults = this.filteredBlogItems.length === 0;
}
  
    
  

  addToFavorites(item: any): void {
    this.favoritesService.addToFavorites(item);
  }
  

  viewFavorites(): void {
    this.router.navigate(['/favorites']);
  }
}