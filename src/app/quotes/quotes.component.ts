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

  toggleDetails(index:any){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  quoteDelete(isComplete:any, index:any){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
