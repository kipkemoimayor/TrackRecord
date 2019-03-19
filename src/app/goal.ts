export class Goal {
  public showDescription:boolean;
  constructor(public id:number, public name:string,public description:string,public compleDate:Date){
    this.showDescription=false;
  }

}
