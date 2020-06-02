import {Component, OnInit} from '@angular/core';
import {SchemaService} from "./schema.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  json: any;

  constructor(private schemaService: SchemaService) {}

  getCounter() {
    console.log(this.schemaService.counter);
  }

  ngOnInit(): void {
    this.getJson().subscribe(json => {
      this.json = json;
    })
  }

  getJson(): Observable<any> {
      return this.schemaService.getJSON();
  }
}
