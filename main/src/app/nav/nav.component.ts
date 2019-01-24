import { Component, OnInit } from '@angular/core';
import {AppConstants} from "../../constants/app.constants";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  providers: [AppConstants]
})
export class NavComponent implements OnInit {

  appTitle: string = 'Srdan Ristic Portfolio';
  logo: string = this.constants.MY_LOGO;

  constructor(private constants: AppConstants) { }

  ngOnInit() {
  }

}
