import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expander',
  templateUrl: './expander.component.html',
  styleUrls: ['./expander.component.scss']
})
export class ExpanderComponent {

  opened = false;

  constructor() { }

  toggle() {
    this.opened = !this.opened;
  }

}
