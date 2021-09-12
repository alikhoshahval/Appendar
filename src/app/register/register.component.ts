import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { Router }    from '@angular/router';
import { NgForm }    from '@angular/forms';
import pageSettings from './../config/page-settings';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnDestroy {
  pageSettings = pageSettings;
  constructor(private router: Router, private renderer: Renderer2) {
    this.pageSettings.pageEmpty = true;
    this.renderer.addClass(document.body, 'bg-white');
  }

  ngOnDestroy() {
    this.pageSettings.pageEmpty = false;
    this.renderer.removeClass(document.body, 'bg-white');
  }

  formSubmit(f: NgForm) {
    this.router.navigate(['dashboard/v3']);
  }
  ngOnInit(): void {
  }

}


