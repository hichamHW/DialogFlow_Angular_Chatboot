import { Component, OnInit } from '@angular/core';
import { ChatbootService } from 'src/app/services/chatboot.service';

@Component({
  selector: 'app-chatboot',
  templateUrl: './chatboot.component.html',
  styleUrls: ['./chatboot.component.css']
})
export class ChatbootComponent implements OnInit {

  conversation: any[] = [];

  message =  '';
  constructor(private serviceChatBoot: ChatbootService) { }

  ngOnInit() {


  }

  send() {

    // tslint:disable-next-line: triple-equals
    if (this.message != '') {
      this.conversation.push({
        message:this.message,
        pos:0
      })
      this.serviceChatBoot.getSpeech(this.message).subscribe(data => {
        this.conversation.push(
          {
            message:data.result.fulfillment.speech,
            pos:1
          });
          console.log(this.conversation);
          
        this.message = '';
      });


    }


  }
}
