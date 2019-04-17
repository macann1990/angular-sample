import { Injectable } from '@angular/core';
import { CarModel } from './../Models/base.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  messages: string[] = [];
  private messageSource = new BehaviorSubject<CarModel>({name: '', price: ''});
  carSelection = this.messageSource.asObservable();

  changeSelection(obj: CarModel) {
    this.messageSource.next(obj);
  }
 
  addMessage(message: string) {
    this.messages.push(message);
  }
 
  clearMessage() {
    this.messages = [];
  }
}