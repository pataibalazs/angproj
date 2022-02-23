import { Injectable } from '@angular/core';
import {Observable, BehaviorSubject,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private subject=new BehaviorSubject<string>("english");

  constructor() { }


  //next frissíti ezt a behavior subject cuccot.
  SendMessage(message:string){
    this.subject.next(message)
  }


  RecieveMessage():Observable<string>{
    return this.subject.asObservable();
  }
}
