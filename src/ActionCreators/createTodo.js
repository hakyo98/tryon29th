import {ADD_TODO} from './type';
import {DEL_TODO} from './type';

let count = 0;
export const createTodo = (text) => ({
        type: ADD_TODO,
        payload: text
});

export const removeTodo = () => ({
        type:DEL_TODO,
        id: 0
})