import {bootstrap, Component, View} from 'angular2/angular2';

@Component({
	selector: 'foster-docs'
})
@View({
	directives: [],
	template: `
	<menu></menu>
	`
})
class FosterDocsApp { }

bootstrap(FosterDocsApp);