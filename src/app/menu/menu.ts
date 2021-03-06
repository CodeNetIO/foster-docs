/// <reference path="../../../typings/app.d.ts" />
import { Component, View, NgFor } from 'angular2/angular2';
import { MenuItemComponent } from './menuItem/menuItem';
import { MenuItem } from '../model/menuItem';

@Component({
	selector: 'menu',
	inputs: ['items']
})
@View({
	directives: [MenuItemComponent, NgFor],
	template: `
	<div class="menu-container">
	    <logo><a href="#">Foster Docs</a></logo>
		<ul>
			<li *ng-for="#item of items">
				<menu-item [item]="item"></menu-item>
			</li>
		</ul>
	</div>
	`
})
export class MenuComponent {
	menuItems: Array<MenuItem>;
}