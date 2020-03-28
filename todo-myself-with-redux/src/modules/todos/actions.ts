import {
    createAction,
} from 'typesafe-actions';


//액션 type 선언
export const INSERT_TODO_ITEM = 'todo/INSERT_TODO_ITEM';
export const DELETE_TODO_ITEM = 'todo/DELETE_TODO_ITEM';
export const TOGGLE_TODO_ITEM = 'todo/TOGGLE_TODO_ITEM';

//액션 생성 함수 선언
export const insertTodoItem = createAction(INSERT_TODO_ITEM)<string>();
export const deleteTodoITem = createAction(DELETE_TODO_ITEM)<number>();
export const toggleTodoITem = createAction(TOGGLE_TODO_ITEM)<number>();

