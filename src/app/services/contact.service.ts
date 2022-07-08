import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient, @Inject(DOCUMENT) private document: any) { }

  sendMessage(message: any) {
    // return this.http.post(this.document.location.hostname + ':3000/email/send', body);
    return this.http.post(this.document.location.hostname + ':3000/email/send', message);
  }
}
