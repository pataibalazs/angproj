import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import {MatMenuModule} from '@angular/material/menu';
import { InitialViewComponent } from '../initial-view/initial-view.component';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-navcom',
  templateUrl: './navcom.component.html',
  styleUrls: ['./navcom.component.css']
})
export class NavcomComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


  constructor(private breakpointObserver: BreakpointObserver, private matIconRegistry: MatIconRegistry, private domSanitzer: DomSanitizer,
      private messageService: MessageService) {
      this.matIconRegistry.addSvgIcon('instagram',
        this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/ig.svg')
      );
      this.matIconRegistry.addSvgIcon('facebook',
      this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/fb.svg')
      
    );


    }
  
    sendMessage(message: any){
      this.messageService.SendMessage(message.target.id);
  }



}
