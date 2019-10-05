import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../../constants/app.constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [AppConstants]
})
export class FooterComponent implements OnInit {

  myWhatsNew = this.constants.MY_WHATS_NEW;
  myEmail = this.constants.MY_EMAIL;
  myPhone = this.constants.MY_PHONE;
  myCity = this.constants.MY_CITY;
  mySkype = this.constants.MY_SKYPE;
  myGithub = this.constants.MY_GITHUB;
  myLinkedIn = this.constants.MY_LINKEDIN;
  myStackOverflow = this.constants.MY_STACKOVERFLOW;
  mySlack = this.constants.MY_SLACK;
  footerCopyright = this.constants.COPYRIGHT;

  constructor(private constants: AppConstants) { }

  ngOnInit() {
  }

}
