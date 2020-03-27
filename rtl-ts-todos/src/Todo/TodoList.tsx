import React from 'react';
import TodoItem from './TodoITem';

const TodoList = ({todos, onRemove, onToggle}:any) => {
    
    const list = todos.map((item:any)=>{
        return <TodoItem todo={item} key={item.id} onRemove={onRemove} onToggle={onToggle}  />
    })
    
    return (
        <div data-testid="TodoList">
            {list}
        </div>
    );
};

export default TodoList;