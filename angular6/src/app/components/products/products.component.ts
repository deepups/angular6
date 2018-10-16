import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';
import * as cloneDeep from 'lodash/cloneDeep';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productsList : Product[];
  showAddProductForm:Boolean = false;
  product:Object = {};
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsList = this.productsService.productArray;
  }

  addNewProductForm(){
    this.showAddProductForm = !this.showAddProductForm;
  }

  editProduct(product){
    this.showAddProductForm = true;
    this.product = cloneDeep(product);
  }

  updateProduct(product,i){
    this.productsList.splice(product,i);
    this.productsList.push(product);
    this.clearTheForm();
  }

  deleteProduct(i){
    this.productsService.productArray.splice(i,1);
  }
  
  clearTheForm(){
    this.product = {};
  }


}
