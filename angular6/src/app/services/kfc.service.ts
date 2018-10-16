import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KfcService {
  msg = 'KFC\'s fiery burger';
  counter = 0;
  constructor() { }
}
  