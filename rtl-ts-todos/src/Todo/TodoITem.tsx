import React from 'react';

const TodoITem = ({todo, onRemove, onToggle}:any) => {

    const { id, content, done} = todo;

    const onHandleClickRemoveBtn = ()=>{
        onRemove(id);
    }

    const onHandleClickToggleBtn = ()=>{
        onToggle(id);
    }

    return (
        <div>
            <span   
                style={{textDecoration:done?'line-through':'none'}}
                onClick={onHandleClickToggleBtn}>
                {content}
            </span>

            <button onClick={onHandleClickRemoveBtn}>
                삭제    
            </button>        
        </div>
    );
};

export default TodoITem;