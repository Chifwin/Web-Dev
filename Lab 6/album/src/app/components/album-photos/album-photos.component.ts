import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AlbumService} from "../../services/album.service";
import {Photos} from "../../data/photos";
import {Location} from "@angular/common";

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent {
  photos: Photos[] = [];

  constructor(private route: ActivatedRoute, private albumService: AlbumService, private location: Location) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.albumService.getPhotos(id).subscribe((photos: Photos[]) => {
        this.photos = photos;
      })
    })
  }
  goBack(){
    this.location.back();
  }
}
