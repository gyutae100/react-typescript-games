import React , {useState, useRef} from 'react';
import InsertTodo from './InsertTodo';
import TodoList from './TodoList';

const TodoApp = () => {

    const [ todos, setTodos] = useState([ 
            {id:0,
            content:'0',
            done:true
            },
            {id:1,
                content:'1',
                done:true
            },
    ]);
    
    let nextId : any =2;

    const handleOnInsert =(content:any)=>{
        setTodos([...todos, {id:nextId++, content:content, done:false}])
    }

    const onHandleRemove = (id : any)=>{
        setTodos(
            todos.filter((todo)=>{
                return id!==todo.id
            })
        )
    }

    const onHandleToggle = (id : any)=>{
        setTodos(
            todos.map((todo)=>{
                
                const doneState = id ===todo.id ? todo.done=!todo.done : todo.done ;

                return {
                    ...todo,  
                    done:doneState  
                }
            })
        )

    }


    return (
        <div>
            <InsertTodo onInsert={handleOnInsert} />
            <TodoList onRemove={onHandleRemove} onToggle={onHandleToggle} todos={todos}  />
        </div>
    );
};

export default TodoApp;