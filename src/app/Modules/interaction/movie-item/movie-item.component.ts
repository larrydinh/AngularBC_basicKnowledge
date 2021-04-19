import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-movie-item',
  template:`
  <div class="card text-white bg-primary">
    <img class="card-img-top" [src]="movie.image" alt="">
    <div class="card-body">
      <h4 class="card-title">{{movie.name}}</h4>
      <p class="card-text">{{movie.description}}</p>
      <button class="btn btn-success" (click)="selectMovie()">Xem chi tiet</button>
      <button class="btn btn-danger" (click)="deleteMovie()">Xoa</button>

    </div>
  </div>
  `,
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

@Input() movie:any = {};
// EventEmitter: doi tuong giup dinh nghia 1 event
// onSelect la ten event (tự định nghĩa)
// Output: nhận vào event vừa tạo, cung cấp các hàm để đẩy event này lên component cha 
// tslint:disable-next-line: no-output-on-prefix
@Output() onSelect = new EventEmitter();
@Output() onDelete = new EventEmitter();

  constructor() { }
  ngOnInit(): void {
  }
  selectMovie(){
     // Can day bo phim vua click len component cha (MovieListComponent)
    //  emit: kisch hoạt event và đẩy lên component cha 
     this.onSelect.emit(this.movie);
  }
  deleteMovie(){
    this.onDelete.emit(this.movie.id)
  }
}
