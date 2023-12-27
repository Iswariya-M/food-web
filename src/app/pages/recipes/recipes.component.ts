import { Component,OnInit } from '@angular/core';
import { BlogService } from '../../blog.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent implements OnInit {
  blogItems!: any[] 

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getBlogItems().subscribe(blogItems => {
      this.blogItems = blogItems;
    });
  }
}


