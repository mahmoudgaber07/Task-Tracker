import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TasksComponent } from '../component/tasks/tasks.component';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiURL = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}
  getTasks() {
    return this.http.get(this.apiURL);
  }
  delete(task: any) {
    const url = `${this.apiURL}/${task.id}`;
    return this.http.delete(url);
  }
  updateTask(task:any){
    const url = `${this.apiURL}/${task.id}`;
    return this.http.put(url,task);
  }
  addTask(task:any){
    return this.http.post(this.apiURL,task);
  }
}
