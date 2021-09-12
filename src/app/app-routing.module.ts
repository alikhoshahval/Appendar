import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

// Home
import { HomePage } from './pages/home/home';

// User Login / Register
import { LoginV3Page } from './pages/login/login';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomePage, data: { title: 'صفحه اصلی'} },
  { path: 'login', component: LoginV3Page, data: { title: 'ورود به حساب کاربری'} },
  { path: 'register', component: RegisterComponent, data: { title: 'ورود به حساب کاربری'} },

];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})


export class AppRoutingModule { }
