import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss']
})
export class InteractionComponent implements OnInit {

  constructor() { }

  movies: any[] = [
    { id: 1, name: 'Doraemon', description: 'ABC', image: 'assets/images/1.jpeg' },
    { id: 2, name: 'Conan', description: 'BCA', image: 'assets/images/2.jpeg' },
    { id: 3, name: 'One puch man', description: 'CBA', image: 'assets/images/3.jpeg' },
  ];

  ngOnInit(): void {
  }

  handleAddMovie(movie:any){
    this.movies.push(movie)
  }
  deleteMovie(movieId:number){
    this.movies = this.movies.filter((item)=> item.id !== movieId);
  }
}
