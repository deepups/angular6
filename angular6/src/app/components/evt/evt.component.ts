import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evt',
  templateUrl: './evt.component.html',
  styleUrls: ['./evt.component.css']
})
export class EvtComponent{
    myClick(val: string) {console.log('i/p val: ', val); }
  
    myMouseover(evt: MouseEvent, val: string) {
      console.log('val_2: ', val);
    }
}
