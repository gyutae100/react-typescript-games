import React from 'react';
import { Todo } from '../modules/todos';
import useTodoActions from '../hooks/useTodoActions';

type TodoItemProps ={
    todo:Todo;
}

function TodoItem({todo}: TodoItemProps){

    const {onToggle, onRemove} = useTodoActions(todo.id);

    // TODO : 커스텀 Hook 사용해서 onToggle/ onRemove 구현
    return <li>
        <span>{todo.done?'돈':'노돈'}</span>
        <span onClick={onToggle}>{todo.text}</span>
        <span onClick={onRemove}>[X]</span>
    </li>
}

export default TodoItem;