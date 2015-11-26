/// <reference path="../../../typings/app.d.ts" />
import {Component, View, NgFor} from 'angular2/angular2';
import {MenuItem, MenuItemComponent} from './menuItem/menuItem';

@Component({
	selector: 'menu',
	inputs: ['items']
})
@View({
	directives: [MenuItemComponent, NgFor],
	template: `
	<ul>
		<menu-item *ng-for="#item of items" [item]="item"></menu-item>
	</ul>
	`
})
export class Menu {
	menuItems: Array<MenuItem>;
}