import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore-service/firestore.service';

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.scss']
})
export class ConcertsComponent implements OnInit {

  constructor(public firestoreService: FirestoreService) { }

  ngOnInit(): void {
    this.firestoreService.concerts.subscribe((items) => {
      console.log(items);
    })
  }

}
