import { Component, Input } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { CarModel } from '../../Models/base.model';

@Component({
  selector: 'news-feed',
  templateUrl: './feed.component.html',
  styleUrls: [ './feed.component.css' ]
})
export class FeedComponent {
  @Input() selectedCarObject : any;
  selectedCarFromService: CarModel;

  constructor(private sData: DataService) {
  }

  ngOnInit() {
    this.sData.carSelection.subscribe(newValue => this.selectedCarFromService = newValue)
  }
  
}