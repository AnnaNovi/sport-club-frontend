import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() toggle_menu = new EventEmitter();

  constructor() {}

  public toggleMenu() {
    this.toggle_menu.emit();
  }
}
