import { Component,OnInit } from '@angular/core';
import { BlogService } from '../../blog.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent  implements OnInit {
  category!: string;
  categoryItems: any[] = [];
  constructor(private route:ActivatedRoute,private blogService:BlogService){

  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.category = params['category'];
      if (this.category) {
        this.getCategoryItems();
      }
    });
  }

  getCategoryItems(): void {
    this.blogService.getItemsByCategory(this.category).subscribe(items => this.categoryItems = items);
  }
}
