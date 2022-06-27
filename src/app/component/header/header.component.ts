import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Task Tracker';
  showAddTask:boolean = false;
  subscription:Subscription;
  constructor(private uiServ:UiService,private rout:Router) {
    this.subscription = this.uiServ.toggleShow.subscribe((v:any) => this.showAddTask = v)
  }
  ngOnInit(): void {
  }
  addToggleTask($event:any){
    this.uiServ.toggleAddTask();
  }
  hasRoute(route:string){
    return this.rout.url === route;
  }

}
