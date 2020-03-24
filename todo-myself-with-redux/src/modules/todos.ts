//액션 type 선언
const INSERT_TODO_ITEM = 'todo/INSERT_TODO_ITEM' as const;
const DELETE_TODO_ITEM = 'todo/DELETE_TODO_ITEM' as const;
const TOGGLE_TODO_ITEM = 'todo/TOGGLE_TODO_ITEM' as const;

//액션 생성 함수 선언
export const insertTodoItem = (content :string)=> ({
    type:INSERT_TODO_ITEM,
    payload:content
});
export const deleteTodoITem = (targetId :number)=> ({
    type:DELETE_TODO_ITEM,
    payload:targetId
});
export const toggleTodoITem = (targetId :number)=> ({
    type:TOGGLE_TODO_ITEM,
    payload:targetId
});

//액션 객체들에 대한 type
type TodoAction = 
| ReturnType<typeof insertTodoItem>
| ReturnType<typeof deleteTodoITem>
| ReturnType<typeof toggleTodoITem>;

//상태의 타입과 상태의 초깃값 선언하기

export interface ITodo{
    id : number;
    content : string;
    done : boolean;
}

type TodoState = {
    todos: ITodo[]
}

const initialState : TodoState = {
    todos:[
        { id: 1, content: '타입스크립트 배우기', done: true },
        { id: 2, content: '타입스크립트와 리덕스 함께 사용해보기', done: true },
        { id: 3, content: '투두리스트 만들기', done: false }
    ]
}

let g_nextId = 4;

function todos(state: TodoState = initialState, action: TodoAction) {

    switch(action.type){
        case INSERT_TODO_ITEM:
            return {todos:[...state.todos, {id:g_nextId++, content:action.payload, done:false}]};
        case DELETE_TODO_ITEM:
            return {todos:state.todos.filter((todoItem)=>todoItem.id!==action.payload)};
        case TOGGLE_TODO_ITEM:
            return {todos:state.todos.map((todoItem)=>todoItem.id===action.payload?{...todoItem,done:!todoItem.done}:todoItem)};    
        default:
            return state;
        }
}
  
  export default todos;