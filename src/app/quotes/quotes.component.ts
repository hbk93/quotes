import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  
  quotes:Quotes[] = [
    {id:1, quote:'time flies', author:'wagwan'},
    {id:2, quote:'as it should', author:'mzito'}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
