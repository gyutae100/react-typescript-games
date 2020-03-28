import React, {useState} from 'react';

interface IProps{
    onInsertTodoItem : any
}

const TodoInsert : React.SFC<IProps> = ({onInsertTodoItem}) => {

    const [value, setValue]  = useState('');

    const onHandleChangeValue = (e :any )=>{
        setValue(e.target.value);
    }

    return (
        <div>
            <input 
                placeholder={'입력하세요'}
                value={value}
                onChange={onHandleChangeValue}
            />
            <button onClick={()=>onInsertTodoItem(value)}>추가</button>
        </div>
    );
};

export default TodoInsert;