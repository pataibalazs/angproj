import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { languageText } from '../languageData';


@Component({
  selector: 'app-initial-view',
  templateUrl: './initial-view.component.html',
  styleUrls: ['./initial-view.component.css']
})
export class InitialViewComponent implements OnInit {

  currentLanguage: String ='english';
  languageTexts:String[][]=languageText;
  torzs: String =this.languageTexts[0][1];
  initCim:String='';

  constructor(private messageService: MessageService) {}
  //majdnem második konstruktor de ezt akkor kell használni amikor a konstruktorban mindenki meg van hívva
  //kérdések: miért kell egy függvényt átadni a subscribe-nak nem lehet ezt elkerülni, illetve az ngonInit csak egyszer fut le ?
  ngOnInit(): void {
    this.messageService.RecieveMessage().subscribe((d) => 
    {

      this.currentLanguage=d;
      if (this.currentLanguage=='magyar')
      {
        this.torzs=this.languageTexts[1][1];
        this.initCim=this.languageTexts[1][0];
      }
      else{
        this.initCim=this.languageTexts[0][0];
        this.torzs=this.languageTexts[0][1];
      }
    });
  }

}
