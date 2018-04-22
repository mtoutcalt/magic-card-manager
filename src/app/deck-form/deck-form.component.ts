import { Component, OnInit } from '@angular/core';
import { Deck } from '../model/deck';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './deck-form.component.html',
  styleUrls: ['./deck-form.component.css']
})
export class DeckFormComponent implements OnInit {

  deck = new Deck();
  localDeck: any;
  firstName: string;
  lastName: string;
  userName: string;
  deckName: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.localDeck = JSON.parse(localStorage.getItem('deck'));
    if (this.localDeck) {
      this.deckName = this.localDeck.deckName;
      this.userName = this.localDeck.username;
      this.firstName = this.localDeck.firstname;
      this.lastName = this.localDeck.lastname;
    }
  }

  onSubmit() {

    localStorage.setItem('deck', JSON.stringify(this.deck));

    var x = document.getElementById("snackbar");
    // Add the "show" class to DIV
    x.className = "show";
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

    this.router.navigate(['deckbuilder/colors']); //go to next component when deck is created
  }

  //nullify the data in localStorage and the localDeck object then refresh so form shows again
  resetDeck() {
    this.localDeck = null;
    localStorage.removeItem('deck');
    localStorage.removeItem('color');
    localStorage.removeItem('creatureDeck');
    localStorage.removeItem('spellDeck');
    this.router.navigate(['deckbuilder/formRenew']);
  }

}
