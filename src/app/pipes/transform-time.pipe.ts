import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformTime'
})
export class TransformTimePipe implements PipeTransform {

  transform(num: number): string {
    let hours = Math.floor(num / 60 )
    let minutes = num % 60;
    if (minutes>0) {
      return `${hours}h ${minutes}m`;
    }
    return `${hours}h`;
  }
}
