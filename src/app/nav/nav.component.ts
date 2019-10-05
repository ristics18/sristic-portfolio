import { Component, OnInit } from '@angular/core';
import {AppConstants} from "../../constants/app.constants";
import {ThemesService} from "../../services/themes/themes.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  providers: [AppConstants]
})
export class NavComponent implements OnInit {

  appTitle: string = 'Srdan Ristic Portfolio';
  logo: string = this.constants.MY_LOGO;

  constructor(private constants: AppConstants, private themesService: ThemesService) {}

  ngOnInit() {}

  onClickLink = function(){

    var screenWidth = window.innerWidth;

    if (screenWidth < 992) {
      document.getElementById('navBtn').click();
    }

  };

  onChangeMode = function(){
    var themeModeText = document.getElementById('theme-mode').innerText;
    themeModeText = themeModeText.trim();
    if (themeModeText === 'Enable Dark Mode') {
      this.themesService.switchTheme('dark');
    } else {
      this.themesService.switchTheme('light');
    }
  }

}
