import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  homepageImagesUrl: string;
  homepageImages: any;
  menusFood: any;


  constructor(private http: HttpClient) {
    this.homepageImagesUrl = 'https://api.spoonacular.com/food/menuItems/search?apiKey=36b2616bbbd3463891cdf064597f778c&query=burger&number=3'
  }

  getHomepageImages (): Promise<any> {
    const prom = new Promise((resolve, reject)=>{
      this.http.get(this.homepageImagesUrl).subscribe(importInfo => {
        this.homepageImages = importInfo;
        resolve(this.homepageImages.menuItems);
      })
    })
    return(prom);
  }

  

}
