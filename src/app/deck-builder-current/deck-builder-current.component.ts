import { Component, OnInit } from '@angular/core';
import { Cards } from 'mtgsdk-ts';
import { MagicCardService } from '../model/magic-card.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-deck-builder-current',
  templateUrl: './deck-builder-current.component.html',
  styleUrls: ['./deck-builder-current.component.css'],
  providers: [MagicCardService]
})
export class DeckBuilderCurrentComponent implements OnInit {

  creatureCards: any;
  spellCards: any;
  card: any;
  storedColor: string;

  constructor(private magicCardService: MagicCardService,
              private router: Router) { }

  ngOnInit() {
    //this function uses localStorage to retrieve the color, creatures, and spell cards
    let color = localStorage.getItem("color");
    console.log(color);
    if (color) {
      this.storedColor = color;
      console.log(this.storedColor);
    }

    let localCreaturesIds = JSON.parse(localStorage.getItem('creatureDeck'));

    if (localCreaturesIds) {
      this.creatureCards = [];
      for (let i = 0; i < localCreaturesIds.length; i++) {
        this.card = this.magicCardService.findCardById(localCreaturesIds[i]).then(result => this.creatureCards.push(result));
      }
    }

    let localSpellIds = JSON.parse(localStorage.getItem('spellDeck'));

    if (localSpellIds) {
      this.spellCards = [];
      for (let i = 0; i < localSpellIds.length; i++) {
        this.card = this.magicCardService.findCardById(localSpellIds[i]).then(result => this.spellCards.push(result));
      }
    }
  }

  creatureCardDeletion(card: any) {
    let localCreatures = JSON.parse(localStorage.getItem('creatureDeck'));
    let revisedCreatures = [];
    localCreatures.forEach( creature => {
      if (card.id == creature) {
        //if the deleted card matches then keep it out of the new array
      } else {
        revisedCreatures.push(creature);
      }
    });

    localStorage.setItem('creatureDeck', JSON.stringify(revisedCreatures));

    var x = document.getElementById("snackbar");
    // Add the "show" class to DIV
    x.className = "show";
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

    window.location.replace("deckbuilder/currentDeckRenew");  //I forced a refresh so the card will not still display
  }

  spellCardDeletion(card: any) {
    let localSpells = JSON.parse(localStorage.getItem('spellDeck'));
    let revisedSpells = [];
    localSpells.forEach( spell => {
      if (card.id == spell) {
        // console.log('gotit');
        // console.log(card.id);
      } else {
        revisedSpells.push(spell);
      }
    });

    localStorage.setItem('spellDeck', JSON.stringify(revisedSpells));

    var x = document.getElementById("snackbar");
    // Add the "show" class to DIV
    x.className = "show";
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

    window.location.replace("deckbuilder/currentDeckRenew");
  }

}
