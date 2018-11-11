import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: Object;

  /**
   * Dependency injection DataService
   * @param data
   */
  constructor(private data: DataService) { }

  /**
   * Will get executed whenever this component loads up
   */
  ngOnInit() {
    // Show all users when home page loads up
    this.data.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    })
  }

}
