import {Component, View, NgFor} from 'angular2/angular2';
import { TodoRow } from './todoRow/todoRow';
import { TodoItem } from '../../model/todoItem';

@Component({
	selector: 'todo-widget',
	inputs: ['items']
})
@View({
	directives: [TodoRow, NgFor],
	template: `
	<div class='table dashboard-widget'>
		<todo-row *ng-for="#item of items" [item]="item"></todo-row>
	</div>
	`
})
export class TodoWidgetComponent {
	items: Array<TodoItem>;
 }