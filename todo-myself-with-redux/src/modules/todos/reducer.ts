import {TodoAction,TodoState} from './types';
import {
    createReducer
} from 'typesafe-actions';
import { INSERT_TODO_ITEM, DELETE_TODO_ITEM, TOGGLE_TODO_ITEM } from './actions';

const initialState : TodoState = {
    todos:[
        { id: 1, content: '타입스크립트 배우기', done: true },
        { id: 2, content: '타입스크립트와 리덕스 함께 사용해보기', done: true },
        { id: 3, content: '투두리스트 만들기', done: false }
    ]
}

let g_nextId = 4;

const todos = createReducer<TodoState, TodoAction>(initialState,{
    [INSERT_TODO_ITEM] : (state, action) => ({todos:[...state.todos, {id:g_nextId++, content:action.payload, done:false}]}),
    [DELETE_TODO_ITEM] : (state, action) => ({todos:state.todos.filter((todoItem)=>todoItem.id!==action.payload)}),
    [TOGGLE_TODO_ITEM] : (state, action) => ({todos:state.todos.map((todoItem)=>todoItem.id===action.payload?{...todoItem,done:!todoItem.done}:todoItem)}),
})

  
  export default todos;