export class Quotes {
  showDetails:boolean;
  constructor(public id: number, public quote: string, public author: string){
    this.showDetails=false;
  }
}
