import { Component, OnInit } from '@angular/core';
import { Channel } from '../../models/channel';

@Component({
  selector: 'app-listview02',
  templateUrl: './listview02.component.html',
  styleUrls: ['./listview02.component.css']
})
export class Listview02Component {

  title = 'Tata Sky: Popular TV Channels (6b)';
  channels = CHANNELS;


  selectedChannel: Channel;
  onSelect(channel: Channel) {
        this.selectedChannel = channel;
        console.log(channel);
      }

}

const CHANNELS: Channel[] = [
  { 'id': 11, 'name': 'Zee News' },
  { 'id': 12, 'name': 'Zee Business' },
  { 'id': 13, 'name': 'Sony' },
  { 'id': 14, 'name': 'ETV Raj' },
  { 'id': 15, 'name': 'Colors' },
  { 'id': 16, 'name': 'ET Now' },
  { 'id': 17, 'name': 'Bloomberg' },
  { 'id': 18, 'name': 'BBC' },
  { 'id': 19, 'name': 'CNN' },
  { 'id': 20, 'name': 'Nat Geo' }
];


