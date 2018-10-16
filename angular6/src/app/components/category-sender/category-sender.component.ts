import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';
import { MachineCategory } from '../../models/machinecategory';

@Component({
  selector: 'app-category-sender',
  templateUrl: './category-sender.component.html',
  styleUrls: ['./category-sender.component.css']
})
export class CategorySenderComponent implements OnInit {

  cat: MachineCategory;
  cats = Categories;
  constructor(private serv: CommunicationService) {
      this.cat = new MachineCategory(0, '');
  }
  ngOnInit(): void { }

  getSelectedCategory(c: MachineCategory): void {
      this.cat = c;
      this.serv.raiseEvent(this.cat.CatId);
  }

}

export const Categories: Array<MachineCategory> = new Array<MachineCategory>();
Categories.push(new MachineCategory(101, 'Electronics'));
Categories.push(new MachineCategory(102, 'Electrical'));
Categories.push(new MachineCategory(103, 'Mechanical'));


