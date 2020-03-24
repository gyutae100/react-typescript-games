import React, {useState} from 'react';
import useInsertTodoItem from '../../hooks/useInsertTodoITem';

interface IProps{}

const TodoInsert : React.SFC<IProps> = () => {

    const { onInsertTodoItem } = useInsertTodoItem();

    const [value, setValue]  = useState('');

    const onHandleChangeValue = (e :any )=>{
        setValue(e.target.value);
    }

    const onHandleInsertTodoITem = ()=>{
        onInsertTodoItem(value);
    }

    return (
        <div>
            <input 
                placeholder={'입력하세요'}
                value={value}
                onChange={onHandleChangeValue}
            />
            <button onClick={()=>onHandleInsertTodoITem()}>추가</button>
        </div>
    );
};

export default TodoInsert;