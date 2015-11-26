import {bootstrap, Component, View} from 'angular2/angular2';
import {Menu} from './menu/menu';
import {MenuItem} from './menu/menuItem/menuItem';

@Component({
	selector: 'foster-docs'
})
@View({
	directives: [Menu],
	template: `
	<menu [items]="items"></menu>
	`
})
class FosterDocsApp {
	items: Array<MenuItem>;

	constructor() {
		this.items = [
			{'title': 'Item 1'},
			{'title': 'Item 2'},
			{'title': 'Item 3'}
		];
	}
}
bootstrap(FosterDocsApp);