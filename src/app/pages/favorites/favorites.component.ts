import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../favorites.service';
import { ActivatedRoute,Router } from '@angular/router';
import { BlogService } from '../../blog.service';
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent implements OnInit{
  favorites:any[]=[];
  blogItems!: any[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute,private favoritesService:FavoritesService,private blogService: BlogService){}

  ngOnInit(): void {
    this.favorites=this.favoritesService.getFavorites();
    this.blogService.getBlogItems().subscribe(blogItems => {
      this.blogItems = blogItems;
    //  this.filteredBlogItems = blogItems; // Initialize filteredBlogItems with all blog items
    });
    
  }
  deleteFavorites(item:any):void{
    this.favoritesService.deleteFavorites(item);
  }


  

}
