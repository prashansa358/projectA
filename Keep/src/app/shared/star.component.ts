import { Component, Input, OnChanges } from "@angular/core";

@Component({
  selector:'app-star',
  templateUrl:'./star.component.html',
  styleUrls:['./star.component.scss']
})

export class StarComponent implements OnChanges{
  @Input() rating: number = 0 ;
  cropWidth: number = 65;

  ngOnChanges(): void {
    this.cropWidth = this.rating*65/5;
  }
}
