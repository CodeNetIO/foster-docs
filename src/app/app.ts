import {bootstrap, Component, View} from 'angular2/angular2';
import {MenuComponent} from './menu/menu';
import {DashboardComponent} from './dashboard/dashboard';
import {MenuItem} from './model/menuItem';

@Component({
	selector: 'foster-docs'
})
@View({
	directives: [MenuComponent, DashboardComponent],
	template: `
	<menu [items]="menuitems"></menu>
	<dashboard></dashboard>
	<status-bar></status-bar>
	`
})
class FosterDocsApp {
	menuitems: Array<MenuItem>;

	constructor() {
		this.menuitems = [
			{'title': 'Dashboard', 'selected': false},
			{'title': 'Tasks', 'selected': false},
			{'title': 'Documents', 'selected': false},
			{'title': 'Calendar', 'selected': false}
		];
	}
}
bootstrap(FosterDocsApp);