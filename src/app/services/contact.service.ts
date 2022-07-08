import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient, @Inject(DOCUMENT) private document: any) { }

  sendMessage(message: any) {
    // return this.http.post('/api/email/send', message);
    return this.http.post('api.' + this.document.location.hostname + '/email/send', message);
  }
}
