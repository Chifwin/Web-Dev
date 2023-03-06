import {Component, OnInit} from '@angular/core';
import {Album} from "../../data/album";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [
    {
      "userId": 1,
      "id": 1,
      "title": "quidem molestiae enim"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "sunt qui excepturi placeat culpa"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "omnis laborum odio"
    },
    {
      "userId": 1,
      "id": 4,
      "title": "non esse culpa molestiae omnis sed optio"
    }];

  ngOnInit(): void {

  }
}
