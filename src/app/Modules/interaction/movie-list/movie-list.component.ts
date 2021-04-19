import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { config } from 'process';

@Component({
  selector: 'app-movie-list',
  template:`
   <div class="container">
  <div class="row">
    <div *ngFor="let movie of movies" class="col-sm-4">
  <app-movie-item [movie]="movie" (onSelect)="selectMovie($event)" (onDelete)="deleteMovie($event)" >  </app-movie-item>
    </div>
  </div>
  </div>

  <!-- movie detail -->
  <div *ngIf="selectedMovie" class="container">
    <div class="row">
      <div class="col-sm-6">
        <img [src]="selectedMovie.image" alt="image" width="300px"/>
      </div>
      <div class="col-sm-6">
        <h1>Ten phim: {{selectedMovie.name}}</h1>
        <p>Mo ta: {{selectedMovie.description}}</p>
      </div>
    </div>
  </div>
  `,  

  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  //khi component con muốn nhận dữ liệu từ component cha, cần phải khai báo @Input() variable-name
@Input() movies = [];
@Output() onDelete = new EventEmitter();
selectedMovie:any = null;
  constructor() { }

  ngOnInit(): void {
  }
  selectMovie(movie:any) {
    console.log(movie);
    this.selectedMovie = movie;
  }

  deleteMovie(movieId:any){
    console.log(movieId);
    this.onDelete.emit(movieId)
  }
}
