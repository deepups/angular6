import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Stickie } from '../../models/stickie';

@Component({
  selector: 'app-stickie',
  templateUrl: './stickie.component.html',
  styleUrls: ['./stickie.component.css']
})
export class StickieComponent{
  showCheck = false;
  @Input() stickie:Stickie;
  @Output() checked = new EventEmitter();
  onChecked() {
    console.log('Stickie clicked');
    this.checked.emit(this.stickie);
  }
  toggleCheck() {
    this.showCheck = !this.showCheck;
  }

}
