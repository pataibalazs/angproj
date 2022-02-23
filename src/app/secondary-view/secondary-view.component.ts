import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { languageText } from '../languageData';


@Component({
  selector: 'app-secondary-view',
  templateUrl: './secondary-view.component.html',
  styleUrls: ['./secondary-view.component.css']
})
export class SecondaryViewComponent implements OnInit {

  currentLanguage: String ='english';
  languageTexts:String[][]=languageText;
  torzs: String =this.languageTexts[0][1];
  initCim:String='';

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.RecieveMessage().subscribe((d) => 
    {

      this.currentLanguage=d;
      if (this.currentLanguage=='magyar')
      {
        this.torzs=this.languageTexts[1][3];
        this.initCim=this.languageTexts[1][2];
      }
      else{
        this.initCim=this.languageTexts[0][2];
        this.torzs=this.languageTexts[0][3];
      }
    });
  }

}