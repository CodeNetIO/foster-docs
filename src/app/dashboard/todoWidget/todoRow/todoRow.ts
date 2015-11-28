import { Component, View } from 'angular2/angular2';
import { TodoItem } from '../../../model/todoItem';

@Component({
	selector: 'todo-row',
	inputs: ['item']
})
@View({
	template: `
	<div class="table-row todo-row">
		<div class="table-cell">{{item.priority}}</div>
		<div class="table-cell">{{item.title}}</div>
		<div class="table-cell">{{item.dueDate.toShortDate()}}</div>
	</div>
	`
})
export class TodoRow {
	item: TodoItem;

}