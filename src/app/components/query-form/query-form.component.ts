import { Component, OnInit } from '@angular/core';
import { queryFormInterface } from 'src/app/interfaces/queryFormInterface';

@Component({
  selector: 'app-query-form',
  templateUrl: './query-form.component.html',
  styleUrls: ['./query-form.component.css']
})
export class QueryFormComponent implements OnInit {
    name = ""
    email = ""
    message =""
  constructor() { }

  ngOnInit(): void {
  }
  submitForm(){
    console.log(this.name, this.email, this.message)
  }

}
