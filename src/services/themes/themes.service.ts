import {Injectable} from '@angular/core';
import {UtilitiesService} from "../utilities/utilities.service";

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  public readonly DefaultTheme = 'light';
  private readonly ThemeCssVariables = [
    '--white-2',
    '--white-3',
    '--white-4',
    '--blue-1',
    '--blue-2',
    '--blue-3',
    '--blue-4',
    '--blue-5',
    '--blue-7',
    '--silver-2',
    '--silver-4',
    '--silver-5',
    '--silver-6',
    '--silver-7',
    '--silver-8',
    '--silver-10',
    '--silver-11',
    '--silver-14',
    '--black-1',
    '--black-5',
    '--black-8'
  ];

  constructor(private utilitiesService: UtilitiesService) {}

  public switchTheme(themeName){
    var uiThemeText = document.getElementById('theme-mode').innerText.trim();
    if (themeName === 'dark') {
      if (uiThemeText === 'Enable Dark Mode') {
        document.getElementById('theme-mode').innerText = ' Disable Dark Mode';
        this.replaceCss();
      }
    } else if (themeName === 'light') {
      if (uiThemeText === 'Disable Dark Mode') {
        document.getElementById('theme-mode').innerText = ' Enable Dark Mode';
        this.replaceCss();
      }
    }
  }

  private replaceCss(){
    this.ThemeCssVariables.forEach((cssProperty) => {
        var productionColor = this.utilitiesService.getCssVariableValue(cssProperty);
        // replace production color with other theme color
        document.documentElement.style.setProperty(cssProperty, this.utilitiesService.getCssVariableValue(cssProperty.concat(('-other-theme'))));
        // save old theme color
        document.documentElement.style.setProperty(cssProperty.concat(('-other-theme')), productionColor);
    });
  }



}
