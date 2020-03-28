import React, {useState,useCallback} from 'react';

const TodoForm = ({onInsert}) => {

    const [value, setValue]= useState();

    const onChangeValue=useCallback(e=>{
        setValue(e.target.value)
    },[]);

    const onSubmit= useCallback(e=>{
        e.preventDefault();  //새로고침을 방지함
        onInsert(value);
        setValue('');
    },[onInsert, value]);


    return (
        <form onSubmit={onSubmit}>
            <input 
                onChange={onChangeValue}
                value={value}
                placeholder="할 일을 입력하세요" />
            <button type="submit">등록</button>
        </form>
    );
};

export default TodoForm;