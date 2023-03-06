import {Component, OnInit} from '@angular/core';
import {Album} from "../../data/album";
import {AlbumService} from "../../services/album.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];

  constructor(private albumService: AlbumService) {
  }

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe((albums: Album[]) => {
      this.albums = albums;
    })
  }
}
