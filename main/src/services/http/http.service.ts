import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {

  }

  getRequest(){
    return this.http.get("someUrl");
  }

  postRequest(url, body){
    return this.http.post(url, body, {responseType: 'text'});
  }

}
