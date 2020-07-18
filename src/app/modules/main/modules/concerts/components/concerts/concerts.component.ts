import { Component } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore-service/firestore.service';

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.scss']
})
export class ConcertsComponent {

  constructor(public firestoreService: FirestoreService) { }

  public concerts$ = this.firestoreService.concerts;
  public openedCards = [];

  isCardOpened(cardIndex: number): boolean {
    return this.openedCards.includes(cardIndex);
  }

  toggleCard(cardIndex: number): void {
    const arrayIndex = this.openedCards.findIndex((index) => index === cardIndex);
    if (arrayIndex > -1) {
      this.openedCards.splice(arrayIndex, 1);
    } else {
      this.openedCards = [...this.openedCards, cardIndex]
    }
  }
}
