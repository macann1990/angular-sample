import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'currency'})
export class CurrencyPipe implements PipeTransform {
  response: string = "";
  currency = "₹";

  transform(value:string): string {
    if(value) {
      if(value !== "") {
        this.response = this.currency + value;
      }
    }
    
    return this.response;
  }
}