import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

describe('<TodoList />', ()=>{

    const sampleTodos = [
        {
            id:0,
            content:'todo 0',
            done:false
        },
        {
            id:1,
            content:'todo 1',
            done:true
        },
    ]

    it('has todo list',()=>{
        const {getByText} = render(<TodoList todos={sampleTodos} />)
        const firstSpanTodoContent = getByText(sampleTodos[0].content);
        const secondSpanTodoContent = getByText(sampleTodos[1].content);

        expect(firstSpanTodoContent).toBeTruthy();
        expect(secondSpanTodoContent).toBeTruthy();
    })

    it('calls toggle function',()=>{
        const onToggle = jest.fn();
        const {getByText} = render(<TodoList todos={sampleTodos} onToggle={onToggle}/>)
        const firstSpanTodoContent = getByText(sampleTodos[0].content);
        
        fireEvent.click(firstSpanTodoContent);

        expect(onToggle).toBeCalledWith(sampleTodos[0].id);
    })

    it('calls remove function',()=>{
        const onRemove = jest.fn();
        const {getByText} = render(<TodoList todos={sampleTodos} onRemove={onRemove}/>)
        const spanTodoContent = getByText(sampleTodos[0].content);
        const btnRemove = spanTodoContent.nextSibling;

        fireEvent.click(btnRemove);

        expect(onRemove).toBeCalledWith(sampleTodos[0].id);
    })

})