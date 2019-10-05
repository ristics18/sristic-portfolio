import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../../constants/app.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [AppConstants]
})
export class HomeComponent implements OnInit {

  myName = this.constants.MY_NAME;
  myTitle = this.constants.MY_TITLE;
  mySummary = this.constants.MY_SUMMARY;
  myImage = this.constants.MY_IMAGE;
  myEmail = this.constants.MY_EMAIL;
  myPhone = this.constants.MY_PHONE;
  myWebsite = this.constants.MY_WEBSITE_URL;
  mySkillsSummary = this.constants.MY_SKILLS_SUMMARY;
  mySkills = this.constants.SKILLS;
  myCertAndAwards = this.constants.CERTS_AND_AWARDS;
  myResume = this.constants.MY_RESUME;

  constructor(private constants: AppConstants) { }

  ngOnInit() {

  }

}
