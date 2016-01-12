import { Component, View } from 'angular2/angular2';
import { TodoWidgetComponent } from './todoWidget/todoWidget';
import { TodoItem } from '../model/todoItem';
import { Priority } from '../model/enums/priority';

@Component({
	selector: 'dashboard'
})
@View({
	directives: [TodoWidgetComponent],
	template: `
	<todo-widget [items]="todoitems"></todo-widget>
	`
})
export class DashboardComponent {
	todoitems: Array<TodoItem>;

	constructor() {
		this.todoitems = [
			{title: 'Item 1', dueDate: new Date(), priority: Priority.High},
			{title: 'Item 2', dueDate: new Date(), priority: Priority.Normal},
			{title: 'Item 3', dueDate: new Date(), priority: Priority.Low}
		];
	}
}