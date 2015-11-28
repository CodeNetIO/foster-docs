import {Component, View} from 'angular2/angular2';
import { MenuItem } from '../../model/menuItem';

@Component({
	selector: 'menu-item',
	inputs: ['item']
})
@View({
	template: `
	<a href="#">{{item.title}}</a>
	`
})
export class MenuItemComponent {
	item: MenuItem;
}