import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput! : ElementRef<HTMLInputElement>;

  constructor( private gifsService : GifsService ) { }

  searchTag() {
    const tag = this.tagInput.nativeElement.value;
    if (tag.length === 0) return;

    this.gifsService.searchTag( tag );

    this.tagInput.nativeElement.value = '';
  }
}
