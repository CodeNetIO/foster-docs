import {Component, View} from 'angular2/angular2';

export class MenuItem {
	title: string;
	selected: boolean;
}

@Component({
	selector: 'menu-item',
	inputs: ['item']
})
@View({
	template: `
	<li>{{item.title}}</li>
	`
})
export class MenuItemComponent {
	item: MenuItem;
}