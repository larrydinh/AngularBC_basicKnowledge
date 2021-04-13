import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template:`
  <p>{{username}}</p>
  <input [value]="username" (input)="changeUsername($event)"/>
  <!-- two way binding:import FormsModule  -->
  <p>{{email}}</p>
  <input [(ngModel)]="email"/>

  <p>{{color}}</p>
  <select [(ngModel)]="color">
    <option value="red">Red</option>
    <option value="green">Green</option>
    <option value="blue">Blue</option>
</select>
`,
  styleUrls: ['./two-way-binding.component.scss']
})
export class TwoWayBindingComponent implements OnInit {
username:string = "";
email:string = "";
color:string = "red";
  constructor() { }

  ngOnInit(): void {
  }
  changeUsername(evt:any){
    console.log(evt.target.value);
    //Lay value cua input gan cho bien username 
    this.username = evt.target.value;
  }
}
