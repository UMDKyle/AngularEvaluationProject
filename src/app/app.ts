import { Component, inject, signal } from '@angular/core';
import { Header } from './components/header/header';
import { AlbumList } from './components/album-list/album-list';
import { ItunesService } from './services/itunesService';
import { Album } from './models/album.model';

@Component({
  selector: 'app-root',
  imports: [Header, AlbumList],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private itunesService = inject(ItunesService);

  albums = signal<Album[]>([]);
  artistName = signal('');
  resultCount = signal(0);
  hasSearched = signal(false);
  isLoading = signal(false);

  onSearch(term: string): void {
    this.artistName.set(term);
    this.isLoading.set(true);
    this.albums.set([]);

    this.itunesService.searchAlbums(term).subscribe((response) => {
      this.albums.set(response.results);
      this.resultCount.set(response.resultCount);
      this.hasSearched.set(true);
      this.isLoading.set(false);
    });
  }
}
