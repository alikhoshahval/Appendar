import { Emitters } from './../../emitters/emitters';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import pageSettings from './../../config/page-settings';

@Component({
  selector: 'home',
  templateUrl: './home.html'
})

export class HomePage {
  pageSettings = pageSettings;

  message = 'شما لاگین نکرده اید' ;

  constructor(private http:HttpClient) {
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


    ngOnInit():void {
      this.http.get('http://localhost:8000/api/user',{withCredentials:true})
      .subscribe((res:any) => {
        // console.log(res);
        this.message =`خوش آمدید ${res.name}`;
        Emitters.authEmitter.emit(true);
     },
      err => {
        // console.log(err)
        this.message =`شما هویت خود را احراز نکرده اید`;

        Emitters.authEmitter.emit(false);

      }

      );
    }

}
