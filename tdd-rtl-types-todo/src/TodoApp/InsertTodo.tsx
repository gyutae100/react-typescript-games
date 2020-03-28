import React, {useState} from 'react';


interface Props {
    // any other props that come into the component, you don't have to explicitly define children.
    }

const InsertTodo:React.FC<Props> = ({onInsert}) => {

    const [value, setValue] = useState('');

    const handleOnChange = (e)=>{
        setValue(e.target.value)
    }

    const handleOnClick = (e)=>{

        onInsert(value)
        setValue('')
    }

    return (
        <>
            <input 
                placeholder="Todo를 입력해 주세요"
                onChange={handleOnChange}
                value={value}
             />
            <button
                onClick={handleOnClick}
            >추가</button>  
        </>
    );
};

export default InsertTodo;