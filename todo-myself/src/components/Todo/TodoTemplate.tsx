import React from 'react';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

interface IProps{}

interface ITodo{
    id : number;
    content : string;
    done : boolean;
}

interface IState{
    todos : ITodo[];
}

class TodoTemplate extends React.Component<IProps, IState> {

    nextTodoId : number = 0;

    state:IState = {
        todos:[]
    }

    onHandleInsertTodoItem = ( value:string ) =>{
        
        const newTodoItem : ITodo = {
            id : this.nextTodoId,
            content: value,
            done:false
        }
        
        this.nextTodoId++;

        this.setState({
            ...this.state,
            todos : [...this.state.todos, newTodoItem]
        })
    }

    onHandleToggleTodoItem = (targetId:number) =>{

        const {todos} = this.state;

        const nextTodos :ITodo[]  = todos.map( (todo)=>{ 
            if( todo.id===targetId) 
                todo.done=!todo.done;
            
            return todo;
        })

        this.setState({
            ...this.state,
            todos: nextTodos
        })
    }

    onHandleRemoveTodoItem = (targetId:number) =>{

        const {todos} = this.state;

        const nextTodos : ITodo[] = todos.filter( (todo)=>{
            return todo.id === targetId ? false:true;
        })

        this.setState({
            ...this.state,
            todos: nextTodos
        })
    }

    
 
    render() {
        const {todos } = this.state;
        return (
            <div>
                <TodoInsert onInsertTodoItem={this.onHandleInsertTodoItem} />
                <TodoList todos={todos} onToggleTodoItem={this.onHandleToggleTodoItem}
                                        onRemoveTodoItem={this.onHandleRemoveTodoItem}
                />
            </div>
        );
    }
}

export default TodoTemplate;