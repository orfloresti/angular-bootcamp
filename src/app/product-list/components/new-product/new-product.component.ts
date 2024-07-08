import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.scss'
})
export class NewProductComponent implements OnInit {

  productForm: FormGroup = new FormGroup({});
  
  constructor(
    private products: ProductService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      title: this.formBuilder.control('', [Validators.required]),
      description: this.formBuilder.control('', [Validators.required]),
      photos: this.formBuilder.array([this.formBuilder.control('')], [Validators.minLength(1)]),
      prices: this.formBuilder.array([this.formBuilder.group({
        key: this.formBuilder.control(''),
        value: this.formBuilder.control(0),
      })]),
      offerDiscount: this.formBuilder.control(0),
    })
  }

  get photos() {
    return this.productForm.get('photos') as FormArray;
  }

  addPhoto() {
    this.photos.push(this.formBuilder.control(''));
  }

  get prices() {
    return this.productForm.get('prices') as FormArray;
  }

  addPrice() {
    this.prices.push(this.formBuilder.group({
      key: this.formBuilder.control(''),
      value: this.formBuilder.control(0),
    }))
  }

  onSave(){
    if(this.productForm.valid){
      this.products.saveProduct(this.productForm.value);
      this.router.navigate(['/product-list/']);
    }
  }
}
