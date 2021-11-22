import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  starproject_1 = true;
  starproject_2 = false;
  starproject_3 = false;
  starproject_4 = false;

  ngOnInit(): void {
  }

}
