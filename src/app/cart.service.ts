import { AppConfigService } from './app-config.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  items: Product[] = [];
  // url = "/assets/shipping.json";
  url = this.appConfig.getConfig().shippingUrl;
  
  constructor(
    private http: HttpClient,
    private appConfig: AppConfigService
  ) {
    console.log(this.url);
  }

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>(this.url)
  }
}
