import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../../constants/app.constants';
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router"


@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss'],
  providers: [AppConstants]
})
export class ProjectViewComponent implements OnInit {

  project = undefined;
  projects = this.constants.PROJECTS;

  constructor(private constants: AppConstants, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getProject();
    if (!this.project) {
      this.router.navigate(['/404'])
    }
  }

  getProject(){
    const id =+ this.route.snapshot.paramMap.get('id');
    for (var i = 0; i < this.projects.length; i++) {
      if (this.projects[i].id == id) {
        this.project = this.projects[i];
        break;
      }
    }
  }

}
