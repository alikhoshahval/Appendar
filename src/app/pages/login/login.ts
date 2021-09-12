import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, NgForm, FormBuilder } from '@angular/forms';
import pageSettings from '../../config/page-settings';

@Component({
  selector: 'login',
  templateUrl: './login.html'
})

export class LoginV3Page implements OnDestroy {
  pageSettings = pageSettings;

  form : FormGroup;

  constructor(private router: Router,
    private renderer: Renderer2,
    private formBuilder:FormBuilder,
    private http:HttpClient) {
    this.pageSettings.pageEmpty = true;
    this.renderer.addClass(document.body, 'bg-white');
  }

  ngOnDestroy() {
    this.pageSettings.pageEmpty = false;
    this.renderer.removeClass(document.body, 'bg-white');
  }

  // formSubmit(f: NgForm) {
  //   this.router.navigate(['dashboard/v3']);
  // }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email:'',
      password:''
    });
  }

  submit():void{
    // console.log(this.form.getRawValue());
    this.http.post('http://localhost:8000/api/login',
    this.form.getRawValue(), { withCredentials:true
    }).subscribe(()=>this.router.navigate(['/home']));
  }
}
