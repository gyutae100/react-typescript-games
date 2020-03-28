import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos, onRemove, onToggle}) => {
    
    const list = todos.map((item)=>{
        return <TodoItem todo={item} onRemove={onRemove} onToggle={onToggle} />
    })

    return (
        <div data-testid={'TodoList'}>
            {list}
        </div>
    );
};

export default TodoList;