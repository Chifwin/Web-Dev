import {Component, OnInit} from '@angular/core';
import {Album} from "../../data/album";
import {AlbumService} from "../../services/album.service";

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

  deleteAlbum(id: number){
    fetch('https://jsonplaceholder.typicode.com/posts/'+id, {
      method: 'DELETE',
    }).then();
  }

  createAlbum(id:number, userId: number, title: string){
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        id: id,
        userId: userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then();
  }

}
