import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

    productId:any;
    product:any;
    constructor(private productService :ProductService, private router:Router, private activatedRoute: ActivatedRoute){}
  
    ngOnInit(): void {
      this.productId = this.activatedRoute.snapshot.paramMap.get('id')
      if(this.productId != 0 ){
        this.productService.getProductById(this.productId).subscribe((response)=>{
            this.product = response
            this.getProductName.setValue(this.product.productName)
            this.getProductPrice.setValue(this.product.price)
            this.getProductQuantity.setValue(this.product.quantity)

        })
      }
  }
 
    productForm = new FormGroup({
      productName:new FormControl("",[Validators.required,Validators.minLength(5)]),
      price:new FormControl("",[Validators.required,Validators.min(9)]),
      quantity:new FormControl("",[Validators.required,Validators.min(2)]),
      image:new FormControl("",[Validators.required,Validators.minLength(20)]),
    })
    
    get getProductName(){
      return this.productForm.controls['productName']
    }

     get getProductPrice(){
      return this.productForm.controls['price']
    }

    get getProductQuantity(){
      return this.productForm.controls['quantity']
    }
    get getProductImage(){
      return this.productForm.controls['image']
    }

    formOperation(e:Event){
      e.preventDefault()
      if(this.productForm.status =='VALID'){
        if(this.productId == 0){
          this.productService.addProduct(this.productForm.value).subscribe(()=>{})
        }
        else{
          this.productService.editProduct(this.productId,this.productForm.value)
          .subscribe();
        }
      }
      this.router.navigate(['/products'])
    }    
}
