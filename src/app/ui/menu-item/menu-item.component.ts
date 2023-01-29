import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item[titleNote][icon]',
  templateUrl: './menu-item.component.html',
})
export class MenuItemComponent {
  styleObj = {
    'width.px': 200,
    display: 'flex',
    'margin.px': 10,
    'align-items': 'center',
    'justify-content': 'flex-start',
    'text-transform': 'uppercase',
  };

  @Input() titleNote: string;
  @Input() icon: string;

  constructor() {}
}
