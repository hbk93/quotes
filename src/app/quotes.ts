export class Quotes {
  showDetails:boolean;
  public upvotes:number;
  public downvotes:number;
  constructor(public id: number, public quote: string, public author: string, public publishedBy: string, public publishingDate: Date){
    this.showDetails=false;
    this.upvotes = 0;
    this.downvotes = 0;
  }
}
