import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products: any
  constructor(private productservice :ProductService){}

  ngOnInit(): void {
      this.productservice.getAllProducts().subscribe({
        next:(response)=>{
          this.products=response
        },
        error:(error)=>{
          console.log(error)
        }
      })
  }

  deleteProduct(productId:any){
    this.products = this.productservice.deleteProduct(productId).subscribe((response)=>{
      this.products = this.products.filter((item:any)=>item.id != productId);
    })
  }

}
