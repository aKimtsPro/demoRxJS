import { Component, OnInit } from '@angular/core';
import { EMPTY, from, fromEvent, NEVER, Observable, of } from 'rxjs';

@Component({
  selector: 'app-observable-basic',
  templateUrl: './observableBasic.component.html',
  styleUrls: ['./observableBasic.component.css']
})
export class ObservableBasicComponent implements OnInit {

  obs$: Observable<any>;

  constructor() { }

  ngOnInit() {
    // créer un Observable;
    // créer un Observable à partir d'un série d'élément
    this.obs$ = of('Bonjour', ' ca', ' va?');

    // créer un Observable à partir d'un Array
    const motList: string[] = ['Bonjour', ' ca', ' va?'];
    this.obs$ = from(motList);

    // créer un Observable déjà completed:
    this.obs$ = EMPTY;

    // créer un Observable qui n'envoie rien et ne s'arrête pas
    this.obs$ = NEVER;

    // créer un Observable à partir d'Event - Hot
    fromEvent(document, 'click').subscribe(
      (event) => console.log('clicked')
    );

    // créer un Observable mieux défini à l'aide du constructeur
    this.obs$ = new Observable((observer) => {
      if (new Date().getHours() > 18) {
        observer.error('il est trop tard pour dire bonjour');
      }
      observer.next('Bonjour');
      observer.next(' ca');
      observer.next(' va?');
      
      observer.complete();
    });
    
    this.obs$.subscribe(
      (nextValue) => console.log(nextValue),
      (err) => console.error(err),
      () => console.log('COMPLETED')
    );

    this.obs$.subscribe(
      (nextValue) => console.log(nextValue + ' - v2'),
      (err) => console.error(err),
      () => console.log('COMPLETED')
    );

  }

}
