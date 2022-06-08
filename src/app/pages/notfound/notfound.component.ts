import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
	selector: 'app-notfound',
	templateUrl: './notfound.component.html',
	styleUrls: ['./notfound.component.less'],
})
export class NotfoundComponent {
	constructor(private location: Location) {}

	BackClick() {
		this.location.back();
	}
}
