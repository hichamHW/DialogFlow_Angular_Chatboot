import { Injectable } from '@angular/core';

import {Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ChatbootService {

  /// lien d'API///
  Url = 'https://api.dialogflow.com/v1/query?v=20150910';

  /// Autorisation///
   token =  '1565e32e2cd94260bcf967b8c0f02c64';

  constructor(private httpclient: HttpClient) { }


  getSpeech(Msg: string): Observable<any> {

        const body = {
            contexts: [
              'shop'
            ],
            lang: 'en',
            query: Msg,
            sessionId: '12345',
            timezone: 'America/New_York'
          };


  // tslint:disable-next-line: align
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      // tslint:disable-next-line: object-literal-key-quotes
      'Authorization': `Bearer ${this.token}`
    })
  };


        return this.httpclient
          .post(`${this.Url}`, body, httpOptions);
  }


}
