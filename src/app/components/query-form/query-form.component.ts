import { Component, OnInit } from '@angular/core';
import { queryFormInterface } from 'src/app/interfaces/queryFormInterface';

@Component({
  selector: 'app-query-form',
  templateUrl: './query-form.component.html',
  styleUrls: ['./query-form.component.css']
})
export class QueryFormComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(submit: any){
    console.log(submit.form.value)
    console.log(submit)
  }

}
