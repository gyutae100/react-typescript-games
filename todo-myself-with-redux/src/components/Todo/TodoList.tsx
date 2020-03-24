import React from 'react';
import TodoListItem from './TodoListItem'
import useReturnTodoList from '../../hooks/useReturnTodoList';

interface IProps{}

const TodoList :React.SFC<IProps> = () => {

    const todos = useReturnTodoList();

    return (
        <div>
            {
                todos.map((todoItem)=>
                    <TodoListItem key={todoItem.id} todoItem={todoItem} />
                )
            }
        </div>
    );
};

export default TodoList;