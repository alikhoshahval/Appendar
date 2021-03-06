import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

// Home
import { HomePage } from './pages/home/home';

// User Login / Register
import { LoginV3Page } from './pages/home/login/login';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePage, data: { title: 'صفحه اصلی'} },
  { path: 'login', component: LoginV3Page, data: { title: 'ورود به حساب کاربری'} },
];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})


export class AppRoutingModule { }
