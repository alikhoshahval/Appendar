import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Emitters } from './../../emitters/emitters';
import { Component, Input, Output, EventEmitter, Renderer2, OnDestroy } from '@angular/core';
import pageSettings from '../../config/page-settings';

@Component({
  selector: 'header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnDestroy {
  authenticated = false;

  @Input() pageSidebarTwo;
	@Output() toggleSidebarRightCollapsed = new EventEmitter<boolean>();
	@Output() toggleMobileSidebar = new EventEmitter<boolean>();
	@Output() toggleMobileRightSidebar = new EventEmitter<boolean>();
	pageSettings = pageSettings;

  mobileSidebarToggle() {
		this.toggleMobileSidebar.emit(true);
  }
  mobileRightSidebarToggle() {
		this.toggleMobileRightSidebar.emit(true);
  }
	toggleSidebarRight() {
		this.toggleSidebarRightCollapsed.emit(true);
	}

	mobileTopMenuToggle() {
	  this.pageSettings.pageMobileTopMenuToggled = !this.pageSettings.pageMobileTopMenuToggled;
	}

	mobileMegaMenuToggle() {
	  this.pageSettings.pageMobileMegaMenuToggled = !this.pageSettings.pageMobileMegaMenuToggled;
	}

	ngOnDestroy() {
	  this.pageSettings.pageMobileTopMenuToggled = false;
	  this.pageSettings.pageMobileMegaMenuToggled = false;
	}

  constructor(private renderer: Renderer2,
    private http:HttpClient,
    private router: Router) {

  }

  ngOnInit():void{
    Emitters.authEmitter.subscribe(
      (auth : boolean) => {
        this.authenticated = auth;
      }
    );
  }

  logout(): void{
    this.http.post('http://localhost:8000/api/logout', {},{withCredentials:true})
    .subscribe(() => {
      this.authenticated = false;
      this.router.navigate(['/login']);
    }
);
  }

}
