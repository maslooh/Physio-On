import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(value: string,): string {
    return value.substring(value.indexOf(',')+1);
  }

}
