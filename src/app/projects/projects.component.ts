import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../../constants/app.constants';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [AppConstants]
})
export class ProjectsComponent implements OnInit {

  projects = this.constants.PROJECTS;

  constructor(private constants: AppConstants) { }

  ngOnInit() {
  }

}
