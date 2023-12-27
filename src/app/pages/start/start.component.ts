import { Component,OnInit } from '@angular/core';
import { BlogService } from '../../blog.service';
import { Router } from '@angular/router';
import { FavoritesService } from '../../favorites.service';
import { SearchService } from '../../search.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent  implements OnInit {

  showResults = false;
  noResults = false;
  blogItems!: any[];
  filteredBlogItems: any[] = []; // Updated array to store filtered blog items
  item: string = '';
  favorites: any[] = [];
  showFavorites: boolean = false;

  
  public categories: {
    category: string;
    imageUrl: string;
  }[] = [ 

    {
      category: 'VEG',
      imageUrl: "./assets/image4.jpg"
    },
    {
      category: 'NON-VEG',
      imageUrl: "../../../assets/bimage3.jpg"
    },
    {
      category: 'DESSERT',
      imageUrl: "../../../assets/image6.jpg"
    },
    {
      category: 'SOUP',
      imageUrl: "../../../assets/image1.jpg"
    }
  ];

  constructor(private blogService: BlogService,private searchService:SearchService,private router: Router, private favoritesService: FavoritesService) {}

  getItemsByCategory(category: string) {
    return this.blogService.getItemsByCategory(category);
  }

  ngOnInit() {
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