import React from 'react';
import TodoItem from "./TodoItem";
import useTodos from '../hooks/useTodos';

function TodoList(){
    const todos = useTodos(); 

    return(
        <ul>
            {todos.map(todo=>(
                <TodoItem todo={todo} key={todo.id} />
            ))}
        </ul>
    )
}

export default TodoList;
