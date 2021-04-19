import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-movie',
  template: `
    <div class="card mb-4">
      <div class="card-header">Add Movie</div>
      <div class="card-body">
        <div class="form-group">
          <label>Ten phim</label>
          <input type="text" class="form-control" [(ngModel)]="form.name" />
        </div>
        <div class="form-group">
          <label>Mo ta</label>
          <input
            type="text"
            class="form-control"
            [(ngModel)]="form.description"
          />
        </div>
        <div class="form-group">
          <label>Hinh anh</label>
          <input
            type="text"
            class="form-control"
            [(ngModel)]="form.image"
          />
        </div>
      </div>
      <div class="card-footer text-muted text-center">
        <button class="btn btn-warning" (click)="handleAddMovie()">
          Them phim
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./add-movie.component.scss'],
})
export class AddMovieComponent implements OnInit {
  form: any = {
    name: '',
    description: '',
    image:'',
  };

  @Output() onAdd = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  handleAddMovie() {
    const id = Math.floor(Math.random() * 100);
    this.onAdd.emit({ ...this.form, id });
  }
}
