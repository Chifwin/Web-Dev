import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Album} from "../../data/album";
import {AlbumService} from "../../services/album.service";
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album = {} as Album;
  form = new FormGroup({
    newTitle: new FormControl<string>('')
  })

  constructor(private route: ActivatedRoute, private albumService: AlbumService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.albumService.getAlbum(id).subscribe((album: Album) => {
        this.album = album;
      })
    })
  }

  changeTitle() {
    this.route.paramMap.subscribe(() => {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      const newTitle = this.form.value;
      console.log(newTitle);
      fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
        method: 'PUT',
        body: JSON.stringify({
          id: id,
          title: newTitle,
          userId: this.album.userId,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      }).then((response) => response.json())
        .then((response) => console.log(response.json()));
    })
  }

}
