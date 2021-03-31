import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  
  quotes:Quotes[] = [
    new Quotes(1, 'time flies','wagwan'),
    new Quotes(2,'as it should','mzito'),
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
