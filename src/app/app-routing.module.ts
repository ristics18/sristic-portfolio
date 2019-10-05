import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { LoginComponent } from "./login/login.component";
import { ProjectsComponent } from "./projects/projects.component";
import {ErrorComponent} from "./errors/error/error.component";
import {ProjectViewComponent} from "./project-view/project-view.component";
import {PageNotFoundComponent} from "./errors/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'projects', component: ProjectsComponent},
  { path: 'error', component: ErrorComponent},
  { path: 'project/:id', component: ProjectViewComponent},
  { path: '404', component: PageNotFoundComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
