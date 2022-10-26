
import { Component, Input, OnChanges, Output,EventEmitter } from "@angular/core";


@Component({
  selector:'app-star',
  templateUrl:'./star.component.html',
  styleUrls:['./star.component.scss']
})

export class StarComponent implements OnChanges{
  @Input()
  rating: number = 0;
  cropWidth: number = 65;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.cropWidth = this.rating*65/5;
  }

  onClick():void{
    this.ratingClicked.emit(`The rating ${this.rating} was clicked`);

  }
}
