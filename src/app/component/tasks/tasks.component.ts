import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
tasks:any= [];
  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe({ 
      next: data => {
        this.tasks = data
    },
      error:error => {
        console.log('error: ', error);
      },
      complete:() =>{
        console.log('complete ', "complete");
      }
    });

    
  }
  recevDel(task:any){
    this.taskService.delete(task).subscribe(
      ()=> (this.tasks = this.tasks.filter((t:any) => t.id !== task.id)
      ));
  }
    reminToggle(task:any){
      task.reminder = !task.reminder;
      this.taskService.updateTask(task).subscribe();
    }
    addTask(task:any){
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task))
    }
}
