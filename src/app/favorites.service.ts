import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  favorites: any[] = [];
  


  addToFavorites(item: any): void {
    if (!this.favorites.includes(item)) {
      this.favorites.push(item);
    }
  }

  getFavorites(): any[] {
    return this.favorites;
  }

  deleteFavorites(item:any):void{
    const index=this.favorites.indexOf(item);
    if(index !== -1){
      this.favorites.splice(index,1);
    }
  }

  constructor() { }
}
