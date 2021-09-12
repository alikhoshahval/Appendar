import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { Router }    from '@angular/router';
import { FormBuilder, FormGroup, NgForm }    from '@angular/forms';
import pageSettings from './../config/page-settings';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnDestroy {
  pageSettings = pageSettings;
  form:FormGroup;

  constructor(private router: Router,
    private renderer: Renderer2,
    private formBuilder:FormBuilder,
    private http: HttpClient
    ) {
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
      name:'',
      email:'',
      password:''
    });
  }

  submit():void{
    //call backend to register the user
  //  console.log(this.form.getRawValue());
   this.http.post('http://localhost:8000/api/register',this.form.getRawValue() )
  //  .subscribe(res => {
  //   // console.log(res);
  //   this.router.navigate(['/login'])
  //  });
      .subscribe(()=> this.router.navigate(['/login']));
  }
}



