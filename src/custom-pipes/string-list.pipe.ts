import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appStringList',
  standalone: true,
})
export class StringListPipe implements PipeTransform {
  transform(value: unknown[] | undefined): string {
    if (!Array.isArray(value)) {
      return '';
    }

    const lastIndex = value.length - 1;

    const strValue: string[] = value.map((item) => {
      if (typeof item === 'number') {
        return item.toString();
      } else if (typeof item === 'string') {
        return item;
      } else {
        return '';
      }
    });

    return strValue.reduce((result, item, index) => {
      if (index === lastIndex) {
        return `${result}${item}`;
      }
      return `${result}${item}, `;
    }, '');
  }
}
