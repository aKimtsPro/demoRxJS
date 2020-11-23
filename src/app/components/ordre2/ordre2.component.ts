import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, of, timer } from 'rxjs';
import { buffer, concatMap, debounce, debounceTime, exhaustMap, filter, map, mergeMap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-ordre2',
  templateUrl: './ordre2.component.html',
  styleUrls: ['./ordre2.component.css']
})
export class Ordre2Component implements OnInit {

  constructor() { }

  ngOnInit() {

    const click$ = fromEvent(document.getElementById('btn'), 'click');

    // click$.pipe(
    //   exhaustMap(v => timer(2000).pipe(
    //     concatMap(() => of(new Date()))
    //   ))
    // ).subscribe(console.log);




    // demo double click

    //const doubleClick$; 

    click$.pipe(
      buffer( click$.pipe( debounceTime(300)) ),
      filter(clicks => clicks.length === 1)
    ).subscribe(v => console.log(new Date()));

    click$.pipe(
      buffer( click$.pipe(debounceTime(300)) ),
      filter(clicks => clicks.length === 2)
    ).subscribe(console.log);

  }

}
