export class Quotes {
  showDetails:boolean;
  constructor(public id: number, public quote: string, public author: string, public publishingDate: Date){
    this.showDetails=false;
  }
}
