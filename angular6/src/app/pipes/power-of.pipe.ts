import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerOf'
})
export class PowerOfPipe implements PipeTransform {

  transform(value: number, exponent: string): number {
    const exp = parseFloat(exponent);
    return Math.pow(value,isNaN(exp) ? 1 : exp);
  }

}
