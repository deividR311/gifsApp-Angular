import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.scss']
})
export class LazyImageComponent {
  @Input()
  src? : string;
  @Input()
  alt : string = '';

  public isLoaded : boolean = false;

  onLoad() {
    this.isLoaded = true;
  }
}
