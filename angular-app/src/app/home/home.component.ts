import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.2.css']
})


export class HomeComponent {
	
	constructor ( private _router: Router ) {}

	openOverviewPage(event: any ) {
		this._router.navigate(['/overview']);
	}

}