import React from 'react';

interface ITodo{
    id : number;
    content : string;
    done : boolean;
}

interface IProps {
    todoItem : ITodo;
    onToggleTodoItem:any;
    onRemoveTodoItem:any;
}

const TodoListItem :React.SFC<IProps> = ({todoItem,onToggleTodoItem,onRemoveTodoItem}) => {
    
    const {id, content, done} = todoItem;
    
    return (
        <div>
            <b onClick={()=>onToggleTodoItem(id)}
                style={{textDecoration: done? 'line-through':'none'}}    
            >
                {content}
            </b>
            <button onClick={()=>onRemoveTodoItem(id)}>지우기</button>
        </div>
    );
};

export default TodoListItem;