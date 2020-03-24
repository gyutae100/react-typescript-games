import React from 'react';
import useTodoActions from '../../hooks/useTodoActions';
import {ITodo} from '../../modules/todos'

interface IProps {
    todoItem : ITodo;
}

const TodoListItem :React.SFC<IProps> = ({todoItem}) => {
    
    const {onDeleteTodoITem,onToggleTodoITem} = useTodoActions();

    const {id, content, done} = todoItem;
    
    return (
        <div>
            <b  onClick={()=>onToggleTodoITem(id)} 
                style={{textDecoration: done? 'line-through':'none'}}    
            >
                {content}
            </b>
            <button
                onClick={()=>onDeleteTodoITem(id)} 
            >지우기</button>
        </div>
    );
};

export default TodoListItem;