import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-demo-projects',
  templateUrl: './demo-projects.component.html',
  styleUrls: ['./demo-projects.component.scss'],
})
export class DemoProjectsComponent implements OnInit {
	title: string = 'Demo Projects';
  imgPath: string = 'assets/images/team.png';

  constructor() { }

  ngOnInit(): void {
  }

}
