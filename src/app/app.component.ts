import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'E-Store-Code-Me-Pro';
    items = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      routerLink: ['/']
    },
    {
      label: 'Products',
      icon: 'pi pi-fw pi-list',
      routerLink: ['/product-list']
    },
    {
      label: 'About',
      icon: 'pi pi-fw pi-info',
      routerLink: ['/about']
    }
  ];
}


