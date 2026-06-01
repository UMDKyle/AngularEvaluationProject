import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItunesResponse } from '../models/album.model';

@Injectable({
  providedIn: 'root',
})
export class ItunesService {
  private http = inject(HttpClient);
  private baseUrl = 'https://itunes.apple.com/search?media=music&entity=album&attribute=artistTerm&limit=50&term=';

  searchAlbums(artistName: string){
    const url = this.baseUrl + encodeURIComponent(artistName);
    return this.http.get<ItunesResponse>(url);
  }
}
