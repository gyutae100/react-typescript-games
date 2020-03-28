import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

describe('<TodoList />',()=>{

    const sampleTodos=[
        {
            id:0,
            text:'0',
            done:false
        },
        {
            id:1,
            text:'1',
            done:true
        }
    ]

    it('render todolist',()=>{
        const onRemove = jest.fn();
        const onToggle = jest.fn();
        const utils = render(<TodoList todos={sampleTodos} onRemove={onRemove} onToggle={onToggle} />)

        const {getByText} = utils;

        getByText(sampleTodos[0].text);
        getByText(sampleTodos[1].text);
    })

    it('calls onToggle and onRemove',()=>{
        const onRemove = jest.fn();
        const onToggle = jest.fn();
        const utils = render(<TodoList todos={sampleTodos} onRemove={onRemove} onToggle={onToggle} />)

        const {getByText, getAllByText} = utils;

        fireEvent.click(getByText(sampleTodos[0].text));
        expect(onToggle).toBeCalledWith(sampleTodos[0].id);

        fireEvent.click(getAllByText('삭제')[0]);
        expect(onRemove).toBeCalledWith(sampleTodos[0].id);
        
    })



})