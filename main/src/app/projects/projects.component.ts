import { Component, OnInit } from '@angular/core';
import { AppGlobals } from '../../services/globals/app.global';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [AppGlobals]
})
export class ProjectsComponent implements OnInit {

  projects = this.globals.projects;

  constructor(private globals: AppGlobals) { }

  ngOnInit() {
  }

}
