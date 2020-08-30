import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yearPipe'
})
export class YearPipe implements PipeTransform {

  transform(value: Date): string {
    return new Date(value).getFullYear().toString();
  }

}
