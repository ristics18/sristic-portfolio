import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../../constants/app.constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [AppConstants]
})
export class AboutComponent implements OnInit {

  myImageAm = this.constants.MY_IMAGE_AM;
  myTitleAm = this.constants.MY_TITLE_AM;
  mySubtitleAm = this.constants.MY_SUBTITLE_AM;
  mySummaryAm = this.constants.MY_SUMMARY_AM;
  experiences = this.constants.EXPERIENCE;
  educations = this.constants.EDUCATION;

  constructor(private constants: AppConstants) { }

  ngOnInit() {
  }

}
