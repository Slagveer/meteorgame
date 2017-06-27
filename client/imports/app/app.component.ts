import {Component, ElementRef} from "@angular/core";
import template from "./app.component.html";
import style from "./app.component.scss";

@Component({
  selector: "app",
  template,
  styles: [ style ]
})
export class AppComponent {
  gameElement: Element;

  constructor() {
    this.gameElement = document.querySelector('body');console.log(this.gameElement)
  }
}
