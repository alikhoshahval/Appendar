import { Component } from '@angular/core';
import pageSettings from './../../config/page-settings';

@Component({
  selector: 'home',
  templateUrl: './home.html'
})

export class HomePage {
  pageSettings = pageSettings;

  constructor() {
    this.pageSettings.pageSidebarSearch = true;
  }

  ngOnDestroy() {
    this.pageSettings.pageSidebarSearch = false;
  }
    // ngbdatepicker
    model1: Date;
    model2: Date;
    get today() {
      return new Date();
    }

}
