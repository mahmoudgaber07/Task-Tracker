import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask = new EventEmitter
  text:string='';
  day:string='';
  reminder:boolean = false;
  showAddTask:boolean = false;
  subscription:Subscription|undefined;
  constructor(private uiServ:UiService) { 
    this.subscription = this.uiServ.toggleShow.subscribe((v:any) => this.showAddTask = v)
  }

  ngOnInit(): void {
  }
  onSubmit(value:any){
    if(!this.text || !this.day){
      alert("Fields Required")
      return;
    }
    this.onAddTask.emit(value);
  }
}
