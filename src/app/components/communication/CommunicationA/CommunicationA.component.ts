import { Component, OnInit } from '@angular/core';
import { CommuncationService } from '../communcation.service';

@Component({
  selector: 'app-communication-a',
  templateUrl: './CommunicationA.component.html',
  styleUrls: ['./CommunicationA.component.css']
})
export class CommunicationAComponent implements OnInit {

  inputValue: string;

  constructor(private service: CommuncationService) { }

  ngOnInit() {
  }

  onClick() {
    this.service.send(this.inputValue);
  }

}
