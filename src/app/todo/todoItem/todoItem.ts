import { Component, View } from 'angular2/angular2';
import { TodoItem  } from '../../model/todoItem';

@Component({
	selector: 'todo-item',
	inputs: ['todoItem']
})
@View({
	template: `
	`
})
class TodoItemComponent {
	todoItem: TodoItem;
}