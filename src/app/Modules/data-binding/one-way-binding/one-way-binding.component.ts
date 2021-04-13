import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  template: `<div class="container">
    <h1> name: {{name}} - interpolation</h1>
    <h1> title: {{showTitle()}}</h1>
    <p [innerHTML]="name"></p>
    <input value="{{name}}"/>
    <input [value]="name"/>
    <img [src]="imgSrc"/>
    <img src ={{imgSrc}}/>
    <!-- <button class="btn btn-success" (click)="changeName()"></button> -->
    <br/>
    <input #tInput/>
    <button class="btn btn-success" (click)="changeName(tInput.value)">setname</button>
  </div>`,

  styleUrls: ['./one-way-binding.component.scss']
})
export class OneWayBindingComponent implements OnInit {
  //MVVM: model view view model
// Tat ca thuoc tinh cua component la state
imgSrc:string = 'https://picsum.photos/200/200'
  name = 'cybersoft';
  constructor() { }
  changeName =(value:string) => {
    this.name=value
  }

showTitle = () => {
  return 'Cybersoft bootcamp01'
}

  ngOnInit(): void {
  }

}
