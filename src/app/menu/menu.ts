/// <reference path="../../../typings/app.d.ts" />
import {Component, View} from 'angular2/angular2';
import {MenuItemComponent} from './menuItem/menuItem.ts';

@Component({
	selector: 'menu',
	inputs: ['menuItems']
})
@View({
	directives: [MenuItemComponent],
	template: `
	`
})
class Menu {
	menuItems: Array<MenuItemComponent>;
}