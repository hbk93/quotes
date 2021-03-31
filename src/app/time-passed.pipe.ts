import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePassed'
})
export class TimePassedPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date();
    let todayWithoutTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(value-todayWithoutTime)
    const secondsInDay = 86400;
    const minutesInHour = 60;
    var dateDifferenceSeconds = dateDifference*0.001;
    var dateCounter = dateDifferenceSeconds/secondsInDay;

    if (dateCounter >= 1 && value < todayWithoutTime){
      return dateCounter;
    }    
    else {
      return 0;
    }
  }

}
