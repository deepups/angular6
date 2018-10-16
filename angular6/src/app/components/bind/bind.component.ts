import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent {

  values = '';
  onKey(event: KeyboardEvent) {
      this.values += (<HTMLInputElement>event.target).value + ' | ';
  }
  reset() {this.values = ''; }

}
