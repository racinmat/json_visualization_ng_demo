import {Component, Input, OnInit} from '@angular/core';
import {isInteger} from "../../../../../../ProgramData/Anaconda3/Lib/site-packages/bokeh/server/static/js/types/core/util/types";
import {SchemaService} from "../schema.service";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  _data: Object;
  keys: string[];
  @Input()
  level: number;


  @Input()
  set data(data: Object) {
    if (data != null) {
      this.keys = Object.keys(data)
      this._data = data;
    }
  }

  isScalar(val): boolean {
      return Object.keys(val).length === 0
  }

  constructor(private service: SchemaService) { }

  ngOnInit(): void {
      this.service.counter++;
      console.log(this.service.counter);
  }

}
