import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointsService } from './helpers/breakpoints.service';
import { MenuService } from './store/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(
    public breakpointsSrv: BreakpointsService,
    public menuSrv: MenuService,
    private router: Router
  ) {}

  public goTo(link: string) {
    this.router.navigateByUrl('/page' + link);
  }
}
