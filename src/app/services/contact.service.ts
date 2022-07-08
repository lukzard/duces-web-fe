import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendMessage(message: any) {
    return this.http.post(window.location.protocol + '//api.' + window.location.hostname + '/email/send', message);
  }
}
