import { Component, OnInit } from '@angular/core';
import { faFileCode, faBookOpen } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public faFileCode = faFileCode;
  public faBookOpen = faBookOpen;

  constructor() { }

  ngOnInit(): void {
  }

}
