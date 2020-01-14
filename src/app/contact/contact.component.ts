import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpService} from "../../services/http/http.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  messageForm: FormGroup;

  submitted = false;
  success = false;
  error = false;

  constructor(private formBuilder: FormBuilder, private http: HttpService) {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  sendMessage(){

    this.submitted = true;
    this.success = false;
    this.error = false;

    if (this.messageForm.invalid) {
      return;
    }

    this.http.postRequest('https://hooks.slack.com/services/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', {
      "text":
        "Name: " + this.messageForm.get('name').value +
        "\n Email: " +  this.messageForm.get('email').value +
        "\n Message: " + this.messageForm.get('message').value
    }).subscribe(
      res => {
        this.success = true;
        this.messageForm.reset();
        this.submitted = false;
      },
      err => {
        this.error = true;
        this.messageForm.reset();
        this.submitted = false;
      });
  }

  ngOnInit() {
  }

}
