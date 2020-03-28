import React from 'react';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

interface IProps{}

interface IState{}

class TodoTemplate extends React.Component<IProps, IState> {
    render() {
        return (
            <div>
                <TodoInsert />
                <TodoList/>
            </div>
        );
    }
}

export default TodoTemplate;