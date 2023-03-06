import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {ErrorService} from "./error.service";
import {Album} from "../data/album";
import {Photos} from "../data/photos";

@Injectable({
  providedIn: "root"
})
export class AlbumService {
  constructor(private http: HttpClient,
              private errorService: ErrorService) {
  }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums').pipe(
      catchError(this.errorHandler.bind(this))
    );
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>('https://jsonplaceholder.typicode.com/albums/'+id).pipe(
      catchError(this.errorHandler.bind(this))
    );
  }

  getPhotos(id: number): Observable<Photos[]> {
    return this.http.get<Photos[]>('https://jsonplaceholder.typicode.com/albums/'+id+'/photos').pipe(
      catchError(this.errorHandler.bind(this))
    );
  }

  private errorHandler(error: HttpErrorResponse) {
    console.log(error.message)
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
