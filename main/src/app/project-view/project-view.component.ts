import { Component, OnInit } from '@angular/core';
import { AppGlobals } from '../../services/globals/app.global';
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router"


@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss'],
  providers: [AppGlobals]
})
export class ProjectViewComponent implements OnInit {

  project = undefined;
  projects = this.globals.projects;

  constructor(private globals: AppGlobals, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getProject();
    if (!this.project) {
      this.router.navigate(['/404'])
    }
  }

  getProject(){
    const id = +this.route.snapshot.paramMap.get('id');
    for (var i = 0; i < this.projects.length; i++) {
      if (this.projects[i].id == id) {
        this.project = this.projects[i];
      }
    }
  }

}
