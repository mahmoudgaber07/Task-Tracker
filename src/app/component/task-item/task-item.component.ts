import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { TASK } from 'src/app/Tasks';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
@Input() task:any;
@Output() delItem = new EventEmitter();
@Output() reminder = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  deleteItem(task:any){
    this.delItem.emit(task);
  }
  toggleReminder(task:any){
    this.reminder.emit(task);
  }

}
