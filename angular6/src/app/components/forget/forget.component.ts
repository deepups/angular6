import { Component, OnInit } from '@angular/core';
import { Stickie } from '../../models/stickie';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent{
  stickie:Stickie;
  public stickies = [
    {category: 'Home', value: 'Pay the mobile bill.', color: 'lightseagreen'},
    {category: 'Bank', value: 'Submit the declaration form.', color: 'lightgreen'},
    {category: 'Movie', value: 'Pay the electricity bill.', color: 'red'},
    {category: 'Park', value: 'Submit travel expense xls.', color: 'aqua'},
    {category: 'Office2', value: 'It is coffee time.', color: 'lightblue'}
  ];
  onStickietChecked(evt: any, i: number) { const pInfo = this.stickies.splice(i, 1); }

}
