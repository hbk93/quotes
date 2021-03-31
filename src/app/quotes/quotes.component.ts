import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  
  quotes:Quotes[] = [
    new Quotes(1, 'When arguing with a fool, find out if the other person is doing the same thing','Anonymous', 'Allan', new Date(2020,9,20)),
    new Quotes(2,'Any app that can be written in JavaScript will eventually be written in JavaScript.','Jeff Atwood', 'Harry', new Date(2020,2,23)),
  ];

  toggleDetails(index:any){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  quoteDelete(isComplete:any, index:any){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
      
    }
  }

  addNewQuote(quote: Quotes){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.publishingDate = new Date(quote.publishingDate)
    this.quotes.push(quote)
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
