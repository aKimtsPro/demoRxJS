import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-hot-cold',
  templateUrl: './hot-cold.component.html',
  styleUrls: ['./hot-cold.component.css']
})
export class HotColdComponent implements OnInit {

  obsSubject$: Subject<number>; // hot observable

  constructor() { }

  ngOnInit() {

    this.obsSubject$ = new Subject(); // pas de cache
    this.obsSubject$ = new BehaviorSubject(1); // une valeur en cache
    this.obsSubject$ = new ReplaySubject(2);

    this.obsSubject$.next(1); // pour behavior : buffer = 1 / pour replay : buffer = [1]
    this.obsSubject$.subscribe(
      (value) => console.log('sub1 - ' + value),
      (err) => console.log('ERR - sub1 :' + err),
      () => console.log('sub1 - COMPLETED')
    );
    this.obsSubject$.next(2); // pour behavior : buffer = 2 / pour replay : buffer = [1, 2]
    this.obsSubject$.next(3); // pour behavior : buffer = 3 / pour replay : buffer = [2, 3]
    this.obsSubject$.subscribe(
      (value) => console.log('sub2 - ' + value),
      (err) => console.log('ERR - sub2 :' + err),
      () => console.log('sub2 - COMPLETED')
    );
    this.obsSubject$.next(4); // pour behavior : buffer = 4 / pour replay : buffer = [3, 4]

    this.obsSubject$.complete();

    this.obsSubject$.next(5); // Subject completed

  }

}
