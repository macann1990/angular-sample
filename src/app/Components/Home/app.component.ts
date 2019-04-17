import { Component } from '@angular/core';
import {CurrencyPipe} from '../../../app/Pipes/currency.pipe';
import { DataService } from '../../Services/data.service';
import { CarModel } from '../../Models/base.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [CurrencyPipe]
})
export class AppComponent  {
  name = 'Angular';
  selectedCarObj: CarModel = {name: '', price: ''};
  selectedCarFromService: CarModel;

  cars: CarModel[] = [
  {name : "BMW", price: "560,000"},
  {name : "Audi", price: "460,000"},
  {name : "Benz", price: "366,000"},
  ];

  constructor(private sData: DataService) {
  }

  ngOnInit() {
    this.sData.carSelection.subscribe(newValue => this.selectedCarFromService = newValue)
  }

  onCarChange(carObj) {
    this.sData.changeSelection(carObj);
    this.selectedCarObj = carObj;
  }
}
