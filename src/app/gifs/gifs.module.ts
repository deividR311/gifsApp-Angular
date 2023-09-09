import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { GifCardComponent } from './components/card-list/components/gif-card/gif-card.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  exports: [
    SearchBoxComponent,
    HomePageComponent
  ],
  declarations: [
    SearchBoxComponent,
    HomePageComponent,
    CardListComponent,
    GifCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class GifsModule { }
