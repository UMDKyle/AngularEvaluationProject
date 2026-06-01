export interface Album {
  collectionId: number;
  collectionName: string;
  artistName: string;
  artworkUrl100: string;
  collectionViewUrl: string;
}

export interface ItunesResponse {
  resultCount: number;
  results: Album[];
}
