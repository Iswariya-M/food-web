
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor() {}

  search(blogItems: any[], searchTerm: string): any[] {
    if (searchTerm) {
      return blogItems.filter(
        (blogItem) =>
          blogItem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blogItem.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      return [];
    }
  }
}

