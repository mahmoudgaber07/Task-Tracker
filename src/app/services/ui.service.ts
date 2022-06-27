import { Injectable } from '@angular/core';
import { observable,Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask:boolean = false;
  private sub = new Subject();
  toggleShow = this.sub.asObservable();
  
  constructor() { }
  toggleAddTask():void{
    this.showAddTask = !this.showAddTask;
    this.sub.next(this.showAddTask);
  }


}
