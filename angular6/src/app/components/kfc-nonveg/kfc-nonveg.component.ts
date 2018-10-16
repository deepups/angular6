import { Component,Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-kfc-nonveg',
  templateUrl: './kfc-nonveg.component.html',
  styleUrls: ['./kfc-nonveg.component.css']
})
export class KfcNonvegComponent {
  constructor() { }
  heading:String = "Non Veg";
  @Output() childTwoMsg = new EventEmitter();
  sendMsgToParent(){
    this.childTwoMsg.emit("I must study maths");
  }

  @Input() counter;
  
  incrementVegCounter():Number{
    console.log("Counter");
    return this.counter++;
  }
}
