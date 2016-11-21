import { Component,  ViewChild} from "@angular/core";
import template from "./app.component.html";
import style from "./app.component.scss";
import {MdSidenav} from "@angular/material/sidenav/sidenav";
@Component({
  selector: "app",
  template,
  styles: [ style ]
})
export class AppComponent {
  @ViewChild('end') end:MdSidenav; // if you comment this line there is no error
  constructor() {
  }
}
