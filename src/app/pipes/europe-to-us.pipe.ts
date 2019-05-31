import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'europeToUS'
})
export class EuropeToUSPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value >= 2.0){
      value = (value - 1) * 100
    }else{
      value = (-100)/(value - 1)
    }
    return Math.round(value)
  }

}
