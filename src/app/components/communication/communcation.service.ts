import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable()
export class CommuncationService {

    private subjet$: Subject<string> = new Subject();

    constructor() { }

    send(info: string) {
        this.subjet$.next(info);
    }

    getInfo(): Observable<string> {
        return (this.subjet$);
    }

}
