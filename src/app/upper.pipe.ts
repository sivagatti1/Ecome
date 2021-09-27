import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'up'
})
export class UpperPipe implements PipeTransform {

  transform(value: string ) {
    return value.toUpperCase();
  }

}
