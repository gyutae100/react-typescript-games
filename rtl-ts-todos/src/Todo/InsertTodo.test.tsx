import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InsertTodo from './InsertTodo';

describe('<InsertTodo />', () => {
  
    it('has inner tags', ()=>{
        const { getByText,getByPlaceholderText } = render(<InsertTodo/>);
        const input = getByPlaceholderText('여기에 Todo를...');
        const btn = getByText('등록');

        expect(input).toBeTruthy();
        expect(btn).toBeTruthy();
    })
    
    it('changes input value',()=>{
        const { getByPlaceholderText } = render(<InsertTodo/>);
        const input = getByPlaceholderText('여기에 Todo를...');

        expect(input).toHaveAttribute('value','');

        fireEvent.change(input,{
            target:{
                value:'1st todo'
            }
        })

        expect(input).toHaveAttribute('value','1st todo');
    })

    it('adds new todo',()=>{
        const onInsert = jest.fn();
        const { getByText, getByPlaceholderText } = render(<InsertTodo onInsert={onInsert}/>);
        const btn = getByText('등록');
        const input = getByPlaceholderText('여기에 Todo를...');

        fireEvent.change(input,{
            target:{
                value:'1st todo'
            }
        })

        fireEvent.click(btn);

        expect(onInsert).toBeCalledWith('1st todo');

        expect(input).toHaveAttribute('value','');
    })


});
