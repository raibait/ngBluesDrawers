import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore-service/firestore.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.scss']
})
export class ConcertsComponent implements OnInit {

  constructor(public firestoreService: FirestoreService) { }

  public concerts$ = this.firestoreService.concerts;

  ngOnInit(): void {
    // this.firestoreService.concerts.pipe(take(1)).subscribe((items) => {
    //   console.log(items);
    //   console.log(items[0].image);

    // })
  }

}
