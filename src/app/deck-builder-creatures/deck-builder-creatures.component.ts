import { Component, OnInit } from '@angular/core';
import { Cards } from 'mtgsdk-ts';
import { MagicCardService } from '../model/magic-card.service';

@Component({
  selector: 'app-deck-builder-creatures',
  templateUrl: './deck-builder-creatures.component.html',
  styleUrls: ['./deck-builder-creatures.component.css'],
  providers: [MagicCardService]
})
export class DeckBuilderCreaturesComponent implements OnInit {

  storedColor: string;
  creatureCards: any;

  constructor(private magicCardService: MagicCardService) { }

  ngOnInit() {

    let color = localStorage.getItem("color");
    console.log(color);
    if (color) {
      this.storedColor = color;
      console.log(this.storedColor);
    }

    this.creatureCards = this.magicCardService.findCreatureCardsByColor(this.storedColor).then(result => this.creatureCards = result);

  }

  cardChosen(card: any) {
    let creatureDeck: Array<string>;
    let localCreatures = JSON.parse(localStorage.getItem('creatureDeck'));
    if (localCreatures == null) {
      creatureDeck = [];
    } else {
      creatureDeck = localCreatures;
    }
    creatureDeck.push(card.id);
    localStorage.setItem('creatureDeck', JSON.stringify(creatureDeck));

    var x = document.getElementById("snackbar");
    // Add the "show" class to DIV
    x.className = "show";
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

}
