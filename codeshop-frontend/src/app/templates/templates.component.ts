import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {

  public categories = { };
  public categoryTypes: string[];

  constructor() {
    this.categories = {
      Search: [
        {
          name: 'Classic Search',
          previewImage: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.stack.imgur.com%2F7dbMR.jpg&f=1&nofb=1',
          price: '£ 12'
        },
        {
          name: 'Business Search',
          previewImage: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.stack.imgur.com%2F7dbMR.jpg&f=1&nofb=1',
          price: '£ 12'
        }
      ],
      Header: [
        {
          name: 'Header 1',
          previewImage: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.stack.imgur.com%2F7dbMR.jpg&f=1&nofb=1',
          price: '£ 12'
        }
      ]
    };

    this.categoryTypes = Object.keys(this.categories);
  }

  ngOnInit(): void {
  }

}
