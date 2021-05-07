import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) {

  }
  sendEmail(name: any, mail: any, message: any) {
    const url = 'https://api.sendgrid.com/v3/mail/send';
    return this.http.post(url, {
      "to": [
        {
          "email": "amangoel300@gmail.com"
        }
      ],
      "from": {
        "email": mail
      },
      "subject": "New mail from " + name + " via ICELL Website",
      "content": [{ "type": "text/plain", "value": message }]
    }, {
      headers: {
        Authorization: 'Bearer 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'
      }
    })
  }

}
