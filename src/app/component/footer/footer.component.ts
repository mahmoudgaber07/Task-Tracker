import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  copyRight:string = 'All Copyright © : Mahmoud Gaber 2022';
  constructor() { }

  ngOnInit(): void {
  }

}
