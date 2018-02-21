import { Component, OnInit } from '@angular/core';
import isEmpty from 'lodash-es/isEmpty';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'How to Add Third-Party Library in Angular CLI';

  ngOnInit() {
    console.log('jQuery version', jQuery.fn.jquery);
    console.log('Is the title empty?', this.isEmptyValue(this.title));
  }

  private isEmptyValue(value: any): boolean {
    return isEmpty(value);
  }
}
