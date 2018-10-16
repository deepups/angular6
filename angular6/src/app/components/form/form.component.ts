import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  value: any;
  person = {
    firstname: 'Ajay',
    lastname: 'Kumar',
    address: {
      street: 'MG Road',
      pincode: '560001',
      city: 'Bangalore'
    }
  };

  submit(form: any) {
    this.value = form;
  }

}
