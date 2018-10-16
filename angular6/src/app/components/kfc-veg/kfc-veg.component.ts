import { Component,Input} from '@angular/core';
import { KfcService } from '../../services/kfc.service';

@Component({
  selector: 'app-kfc-veg',
  templateUrl: './kfc-veg.component.html',
  styleUrls: ['./kfc-veg.component.css']
})
export class KfcVegComponent {
  constructor(private KfcService: KfcService) {
    console.log('KFC message from the service inside component'+KfcService); 
  }
  heading:String = "Veg";
  @Input() parentMsg;

}
