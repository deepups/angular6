import { Injectable } from '@angular/core';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productArray: Product[] = PRODUCT_ITEMS;
}

export const PRODUCT_ITEMS: Product[] = [{
    id: 1,
    name: '1539KP02',
    description: 'Black Dial Plastic Strap Watch',
    price: 5000
  }, {
    id: 2,
    name: '1635KP04',
    description: 'Blue Dial Analog Watch for Men',
    price: 5400
  }, {
    id: 3,
    name: '2526QL02',
    description: 'White Dial Analog Watch for Women',
    price: 2998
  }, {
    id: 4,
    name: 'NH90037WL02J',
    description: 'Brown Dial Leather Strap Watch',
    price: 9747
  }, {
    id: 5,
    name: '9487QP01J',
    description: 'Beige Dial Fabric Strap Watch',
    price: 3497
  }

 ]
