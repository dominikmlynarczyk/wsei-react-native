import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, TOGGLE_CHECK } from '../constants/action-types';

import { Todo } from '../reducers/task-reducer';

export function addTodo(store: Todo) {
	return {
		type: ADD_TODO,
		store
	};
}

export function removeTodo(store: Todo) {
	return {
		type: REMOVE_TODO,
		store
	};
}

export function updateTodo(store: Partial<Todo>) {
	return {
		type: UPDATE_TODO,
		store
	};
}

export function toggleCheck(store: Pick<Todo, 'id'>) {
	return {
		type: TOGGLE_CHECK,
		store
	};
}
