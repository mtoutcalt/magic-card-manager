import { Component, OnInit } from '@angular/core';
import { Cards, Card } from 'mtgsdk-ts';
import { MagicCardService } from '../model/magic-card.service';

@Component({
  selector: 'app-booster-pack',
  templateUrl: './booster-pack.component.html',
  styleUrls: ['./booster-pack.component.css'],
  providers: [MagicCardService]
})
export class BoosterPackComponent implements OnInit {

  //IDs of different Magic sets from the API
  setIds = ['UST', 'UNH', 'UGL', 'PTK', 'POR', 'PCA', 'HOP', 'VMA', 'IMA', 'MPS', 'DDS', 'DDT', 'DDL', 'CMA', 'ARC',
            'WWK', 'CED', 'VAN', 'VIS', 'TSB', 'TPR', 'TOR', 'SHM', 'RTR', 'PLC', 'ORI', 'LEG', 'JUD', 'ICE', 'KTK',
            'LEA', 'HOU', 'FEM', 'EXO', 'EVE', 'DST', 'DGM', 'CST', 'BRB', 'CON', 'ATQ', 'APC', 'ALA', '9ED', 'AKH'];

  booster: any;
  setName: string;

  constructor(private magicCardService: MagicCardService) { }

  ngOnInit() { }

 openBooster() {
   let randomNum = Math.floor(Math.random() * Math.floor(this.setIds.length - 1)); //get random array index
   let randomSet = this.setIds[randomNum];
   console.log(randomSet);

   this.magicCardService.findSets(randomSet).then(result => {
     this.booster = result;
     this.magicCardService.findSetName(randomSet).then(result => this.setName = result);  //get Cards for booster
   });
 }

}
