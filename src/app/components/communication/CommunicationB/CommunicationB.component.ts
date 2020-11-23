import { Component, OnInit } from '@angular/core';
import { combineLatest, interval, Observable, of, zip } from 'rxjs';
import { catchError, debounceTime, distinct, distinctUntilChanged, every, filter, map, pluck, reduce, scan, tap, throttleTime } from 'rxjs/operators';
import { CommuncationService } from '../communcation.service';

@Component({
  selector: 'app-communication-b',
  templateUrl: './CommunicationB.component.html',
  styleUrls: ['./CommunicationB.component.css']
})
export class CommunicationBComponent implements OnInit {

  recepteur: Observable<boolean>;

  constructor(private service: CommuncationService) { }

  ngOnInit() {
    this.recepteur = this.service.getInfo().pipe(
      // filter((value) => value.length <= 10), // filtre les emissions interessantes
      // map(value => value.length), // transforme l'émission en ce qui m'interesse
      // pluck('length') // récupère 1 ou plusieurs propriétés sur chaque émission
      // scan((acc, value) => acc + ' ' + value + ',', ' - ' ) // rassembler les infos des émissions en un élément
      // reduce((acc, value) => acc + value, '')
      every((value) => value.startsWith('c'))
      // throttleTime(1000) // cooldown sur l'emission - pas de nouvelle émission pdt le cooldown
      // debounceTime(1000) // delay sur l'emission - pour envoyer une émission, il ne faut rien envoyer pdt un certain delay
      // distinctUntilChanged() // n'emet que si la valeur est différente de la dernière
      // tap( (e) => console.log(e) ) // effectue une action pour chaque emission
      // catchError(err => of(0)) // si une erreur se produit switch sur un autre observable
    );

    // COMBINE = emet une combinaison d'une des émission et de la dernière de(s) (l')autre(s) à chaque fois qu'un des Obs emet
    // combineLatest(this.recepteur, interval(1000)).subscribe((e) => console.log(e));
 
    // ZIP = n'emet que si les Obs ont tous émis
    // const inter = interval(1000);
    // inter.subscribe(console.log);
    // zip(this.recepteur, inter).subscribe(console.log);

    this.recepteur.subscribe( 
      (v) => console.log(v), 
      (err) => console.log(err),
      () => console.log('completed')
    );
  }

}
