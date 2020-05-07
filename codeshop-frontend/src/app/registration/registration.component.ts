import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public email = new FormControl('');
  public password = new FormControl('');

  constructor(private backend: BackendService) { }

  ngOnInit(): void {
  }

  public registerUser() {
    this.backend.registerUser(this.email.value, this.password.value)
      .subscribe((data) => {
        console.log(data);
      });
  }

}
