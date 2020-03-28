import React from 'react';
import TodoListItem from './TodoListItem'

interface ITodo{
    id : number;
    content : string;
    done : boolean;
}

interface IProps{
    todos : ITodo[];
    onToggleTodoItem :any;
    onRemoveTodoItem: any;
}

const TodoList :React.SFC<IProps> = ({todos,onToggleTodoItem,onRemoveTodoItem}) => {
    return (
        <div>
            {
                todos.map((todoItem)=>
                    <TodoListItem key={todoItem.id} 
                    todoItem={todoItem} onToggleTodoItem={onToggleTodoItem} 
                    onRemoveTodoItem={onRemoveTodoItem}
                    />
                )
            }
        </div>
    );
};

export default TodoList;