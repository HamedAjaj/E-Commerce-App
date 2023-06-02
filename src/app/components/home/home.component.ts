import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
}
