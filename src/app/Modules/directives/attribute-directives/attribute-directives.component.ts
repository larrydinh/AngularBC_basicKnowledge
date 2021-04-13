import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
template:`
<h3>Demo ngClass</h3>
<p class="text-center" [class]="{
  'bg-success':isActive,
  'bg-warning':!isActive
}">
Cyber
</p>
<button (click)="isActive = !isActive">Toggle active</button>
<!-- Cach viet rut gon khi co 1 condition  -->
<p class="text-center"[class.bg-primary]="isActive">Cyber 2</p>
<h3>Demo ngStyle</h3>
<p style="text-align:center"[style]="{'background-color':color}">ngStyle</p>
<div style="height:200px;width:200px"
[style]="{'background-image':'url(' +imgSrc+ ')'}"
></div>
<div [innerHTML]="html"></div>
`,
  styleUrls: ['./attribute-directives.component.scss']
})
export class AttributeDirectivesComponent implements OnInit {
isActive:boolean = false;
color:string = "red";
imgSrc:string ="https://picsum.photos/200/200";
html:string = `
<div class ="alert alert-danger">
<span>Error</span>
</div>
`;
  constructor() { }

  ngOnInit(): void {
  }

}

