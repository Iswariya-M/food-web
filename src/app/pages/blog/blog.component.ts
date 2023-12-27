import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BlogService } from '../../blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  blogItem!: any;

  constructor(private route: ActivatedRoute, private blogService: BlogService){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      if (!isNaN(id)) {
        this.blogService.getBlogItemById(id).subscribe((blogItem) => {
          this.blogItem = blogItem;
        });
      }
    });
  }
}
