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
        console.log(res);
        this.success = true;
        this.messageForm.reset();
        this.submitted = false;
      },
      err => {
        console.log(err);
        this.error = true;
        this.messageForm.reset();
        this.submitted = false;
      });
  }

  ngOnInit() {
  }

}
