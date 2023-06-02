import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    baseUrl ="http://localhost:3005/products"

  constructor( private httpClient:HttpClient) { }

  getAllProducts(){
    return this.httpClient.get(this.baseUrl);
  }

  getProductById(productId:any){
    return this.httpClient.get(`${this.baseUrl}/${productId}`)
  }

  addProduct(product: any){
    return this.httpClient.post(this.baseUrl,product);
  }



  editProduct(productId:any , product :any){
    return this.httpClient.put(`${this.baseUrl}/${productId}`,product);
  }

  deleteProduct(productId:any){
    return this.httpClient.delete(`${this.baseUrl}/${productId}`)
  }
  
}
