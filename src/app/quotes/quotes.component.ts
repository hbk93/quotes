import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  
  quotes:Quotes[] = [
    new Quotes(1, 'time flies','wagwan',new Date(2021,2,31)),
    new Quotes(2,'as it should','mzito', new Date(2021,2,25)),
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
  
  constructor() { }

  ngOnInit(): void {
  }

}
