import {bootstrap, Component, View} from 'angular2/angular2';
import {Menu} from './menu/menu';
import {MenuItem} from './model/menuItem';

@Component({
	selector: 'foster-docs'
})
@View({
	directives: [Menu],
	template: `
	<menu [items]="items"></menu>
	<status-bar></status-bar>
	`
})
class FosterDocsApp {
	items: Array<MenuItem>;

	constructor() {
		this.items = [
			{'title': 'New', 'selected': false},
			{'title': 'Tasks', 'selected': false},
			{'title': 'Documents', 'selected': false}
		];
	}
}
bootstrap(FosterDocsApp);