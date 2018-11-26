import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {

  }

  getData(){
    return this.http.get("someUrl");
  }

  sendData(url, body){
    return this.http.post(url, body, {responseType: 'text'});
  }

}
