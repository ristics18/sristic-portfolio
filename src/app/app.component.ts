import {AfterViewInit, Component} from '@angular/core';
import {ThemesService} from "../services/themes/themes.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'main';

  constructor(private themesService: ThemesService){}

  ngAfterViewInit(): void {
    this.themesService.switchTheme(this.themesService.DefaultTheme);
  }

}
