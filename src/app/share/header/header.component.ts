import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public menuItems = [
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

  constructor(private router: Router, private route: ActivatedRoute) {}

  public goTo(link: string) {
    console.log(
      '🚀 ~ file: header.component.ts:25 ~ HeaderComponent ~ goTo ~ link',
      link
    );
    // this.router.navigate([], {
    //   relativeTo: this.route
    // });
    this.router.navigateByUrl('/page' + link);
  }
}
