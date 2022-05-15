import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe as AngularCurrencyPipe }  from '@angular/common';

@Pipe({ name: '_currency' })
export class CurrencyPipe implements PipeTransform {
  transform(num: any, currencyCode?: string, showSymbol?: boolean, digits?: string): any {
    let value = new AngularCurrencyPipe(navigator.language).transform(num, currencyCode, showSymbol, digits);
    if (value) {
      let firstDigit = value!.match(/\d/);
      let symbol = value!.slice(0, firstDigit!.index);
      let amount = value!.slice(firstDigit!.index);
      return symbol + " " + amount;
    }
    return;
  }
}
