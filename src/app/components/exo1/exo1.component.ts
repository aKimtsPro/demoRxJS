import { Component, OnInit } from '@angular/core';
import { observable, Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-exo1',
  templateUrl: './exo1.component.html',
  styleUrls: ['./exo1.component.scss']
})
export class Exo1Component implements OnInit {

  inputValue: number;
  obs$: Observable<number>;

  constructor() { }

  ngOnInit(): void {

    this.obs$ = new Observable((obs) => {

      if (this.inputValue > 20) {
        obs.error({
          message: `La valeur ${this.inputValue} est trop grande. (valeur doit etre <= 20)`,
          value: this.inputValue
        });
      }

      for (let i = 1; i <= this.inputValue; i++) {
        obs.next(i);
        if (i >= 10) {
          obs.complete();
        }
      }

      obs.complete();

    });
  }

  onClick() {
    this.obs$.subscribe(
      (value) => console.log('NEXT: ' + value),
      (err) => console.warn('ERR: ' + err.message),
      () => console.log('COMPLETED')
    );
  }

}

interface Exo1Error {
  message: string;
  valeur: number;
}
