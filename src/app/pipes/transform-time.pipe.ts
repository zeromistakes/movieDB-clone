import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformTime'
})
export class TransformTimePipe implements PipeTransform {

  transform(num: number): string {
    let h = Math.floor(num / 60 )
    let m = num % 60;
    if (m>0) {
      return `${h}h ${m}m`;
    }
    return `${h}h`;
  }

}
