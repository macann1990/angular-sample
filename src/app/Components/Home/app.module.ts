import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FeedComponent } from './../Feed/feed.component';
import {CurrencyPipe} from '../../../app/Pipes/currency.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FeedComponent, CurrencyPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
