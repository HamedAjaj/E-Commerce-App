import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId: any;
  product: any;
  constructor(private activatedRoute: ActivatedRoute,private productServices:ProductService) {}
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get("id")
    this.productServices.getProductById(this.productId).subscribe((response) => {
     this.product = response
    })
}
}
