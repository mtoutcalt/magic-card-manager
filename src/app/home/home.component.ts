import { Component, OnInit } from '@angular/core';
import { Cards } from 'mtgsdk-ts';
import { MagicCardService } from '../model/magic-card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MagicCardService]
})
export class HomeComponent implements OnInit {

  name:string;
  image:string;
  result:any;

  cards: any;

  constructor(private magicCardService: MagicCardService) { }

  ngOnInit() {
    this.cards = this.magicCardService.findCards("Guttural").then(result => this.cards = result); //default search - I chose something random
  }

  search(term: string) {
    this.cards = this.magicCardService.findCards(term).then(result => this.cards = result);
  }




}
