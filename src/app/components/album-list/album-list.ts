import { Component, input } from '@angular/core';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-list',
  imports: [],
  templateUrl: './album-list.html',
  styleUrl: './album-list.scss',
})
export class AlbumList {
  albums = input<Album[]>([]);
}
