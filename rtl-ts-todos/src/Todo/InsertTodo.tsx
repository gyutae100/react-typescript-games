import React, {useState} from 'react';

const InsertTodo = ({onInsert}:any) => {

    const [value, setValue] = useState('');

    const onHandleChange = (e:any)=>{
        setValue(e.target.value);
    }

    const onHandleClick = ()=>{
        
        onInsert(value);
        setValue('')
    }


    return (
        <div data-testid="InsertTodo">
            <input placeholder="여기에 Todo를..." value={value} onChange={onHandleChange}/>
            <button onClick={onHandleClick}>등록</button>
        </div>
    );
};

export default InsertTodo;