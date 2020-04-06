import { createStore } from 'redux';
import todoReducer from '../reducers/task-reducer';

const store = createStore(todoReducer);

export default store;
