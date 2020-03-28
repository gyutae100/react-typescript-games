import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InsertTodo from './InsertTodo';

describe('<InsertTodo />', ()=>{
    it('has input and btn',()=>{
        const utils = render(<InsertTodo />)
        const { getByPlaceholderText, getByText } = utils;
        getByPlaceholderText('Todo를 입력해 주세요');
        getByText('추가');
    })

    it('changes value of input', ()=>{
        const utils = render(<InsertTodo />)
        const { getByPlaceholderText} = utils;
        const input = getByPlaceholderText('Todo를 입력해 주세요');
        expect(input).toHaveAttribute('value','');

        fireEvent.change(input,{
            target:{
                value:'바꾼 값',
            }
        })

        expect(input).toHaveAttribute('value','바꾼 값');
    })

    it('adds new todo Item', ()=>{
        const onInsert = jest.fn();
        const utils = render(<InsertTodo onInsert={onInsert}/>)
        const { getByText,getByPlaceholderText } = utils;
        const btn = getByText('추가');
        const input = getByPlaceholderText('Todo를 입력해 주세요');

        fireEvent.change(input,{
            target:{
                value:'바꾼 값',
            }
        })

        fireEvent.click(btn);
        expect(onInsert).toBeCalledWith('바꾼 값');

        expect(input).toHaveAttribute('value','');
    })

})


