import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any, args?: any): number {
    let today:Date=new Date();
    let todayDateNotime:any =new Date(today.getFullYear(),today.getMonth(),today.getDate());
    var difference=Math.abs(value-todayDateNotime);
    const secondsInDay=86400;
    var dateDiferenceSeconds=difference*0.001;
    var dateCounter=dateDiferenceSeconds/secondsInDay;
    if(dateCounter>= 1 && value>todayDateNotime){
      return dateCounter;
    }else{
      return 0;
    }
  }

}
