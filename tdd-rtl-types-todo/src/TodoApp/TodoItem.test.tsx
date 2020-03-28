import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoItem from './TodoItem';

describe('<TodoItem />',()=>{

    const sampleTodo= {
        id:0,
        text:'0',
        done:false
    }

    const utils=(props={})=>{

        const initialProps = props.todo || sampleTodo
        const util = render(<TodoItem todo={initialProps} {...props} />);
        const {getByText}= util;
        const {text, id} = initialProps;
        const todoSpan = getByText(text);
        const removeBtn = todoSpan.nextSibling;

        return {
            ...utils,
            todoSpan,
            removeBtn,
            id,
            text
        }
    }


    it('has todo text & remove btn',()=>{
        
        const { todoSpan, removeBtn} = utils();

        expect(todoSpan).toBeTruthy();
        expect(removeBtn).toBeTruthy();
    })

    it(' show line through on span by toggle',()=>{
        
        const {todoSpan} = utils({todo:{...sampleTodo,text:'1',done:true}});
        expect(todoSpan).toHaveStyle('text-decoration : line-through');
    })

    it('does not show line through on span by toggle',()=>{
        
        const {todoSpan} = utils({todo:{...sampleTodo,text:'2',done:false}});
        expect(todoSpan).toHaveStyle('text-decoration : none');
    })

    it('Remove todo',()=>{
        const onRemove = jest.fn();
        const {removeBtn,id} = utils({onRemove});

        fireEvent.click(removeBtn);
        expect(onRemove).toBeCalledWith(id);
    })

})
