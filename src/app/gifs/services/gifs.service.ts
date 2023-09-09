import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Gif, SearchResponse } from '../interfaces/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService extends BaseService {
  private _tagsHistory: string[] = [];
  gifList : Gif[] = [];

  constructor( http: HttpClient ) {
    super( http );

    this.getlocalStorage();
  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory( tag : string ) {
    tag = tag.toLowerCase();
    if (this.tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter(oldTag => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);

    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private getlocalStorage() : void {
    const LOCAL_STORAGE = localStorage.getItem('history');
    if ( !LOCAL_STORAGE ) return;

    this._tagsHistory = JSON.parse(LOCAL_STORAGE);

    if (this._tagsHistory.length === 0) return;

    this.searchTag(this._tagsHistory[0]);
  }

  searchTag( tag : string ) {
    this.organizeHistory( tag );
    const params = new HttpParams()
    .set('api_key', environment.apiKey).set('limit', '10').set('q', tag);

    this.http.get<SearchResponse>(`${this.path}search`, { params }).subscribe(
      res => {
        this.gifList = res.data;
      }
    )
  }
}
