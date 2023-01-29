import { Injectable } from '@angular/core';

interface MenuItems {
  icon: string;
  title: string;
  routerLink: string;
}

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  public isMenuOpened: boolean = true;
  public menuItems: MenuItems[] = [
    {
      icon: 'person',
      title: 'Клиенты',
      routerLink: '/clients',
    },
    {
      icon: 'person',
      title: 'Тренеры',
      routerLink: '/trainers',
    },
  ];

  constructor() {}
}
