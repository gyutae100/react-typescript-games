import React from 'react';

const TodoItem = ({todo, onToggle, onRemove}) => {
    
    const {id, text, done}  = todo;

    const onHandleToggle=()=>{
        onToggle(id)
    }

    const onHandleRemove=()=>{
        onRemove(id);
    }

    return (
        <div>
            <span
                onClick={onHandleToggle} 
                style={{textDecoration: done? 'line-through':'none'}}>
                {text}
            </span>
            <button onClick={onHandleRemove}>
                삭제
            </button>
        </div>
    );
};

export default TodoItem;