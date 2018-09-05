import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimCreditCard'
})
export class TrimCreditCardPipe implements PipeTransform {

  transform(value: String, args?: any): any {
    if (value.length === 16) {
      const _prefix = value.substr(0, 3);
      const _suffix = value.substr(13, 3);
      let _middle = '';
      let _dashIndex = 3;
      for (let i = 0; i < 10; i++) {
        console.log(_dashIndex);
        if ((_dashIndex % 4) === 0) {
          _middle += '-';
        }
        _dashIndex++;
        _middle += args;
      }
      return _prefix + _middle + _suffix;
    } else {
      return value;
    }
  }

}
