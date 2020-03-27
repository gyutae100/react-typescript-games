import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoItem from './TodoItem';

describe('<TodoItem />',()=>{

    const sampleTodo = {
        id: 0,
        content: '1st todo',
        done:false
    }

    const utils =(props={})=>{
        const initialTodo = props.todo || sampleTodo;
        const id = initialTodo.id;
        const {getByText} = render(<TodoItem todo={initialTodo} {...props} />);
        const spanTodoContent = getByText(initialTodo.content);
        const btnRemove = spanTodoContent.nextSibling;

        return{
            ...utils,
            spanTodoContent,
            btnRemove,
            id
        }
    }

    it('has inner tags',()=>{
        const { spanTodoContent, btnRemove} = utils();
        expect(spanTodoContent).toBeTruthy();
        expect(btnRemove).toBeTruthy();
    })

    it('render this component properly',()=>{
        const { spanTodoContent, btnRemove} = utils({todo:{id:1,content:'test todo', done:true}});
        expect(spanTodoContent).toBeTruthy();
        expect(btnRemove).toBeTruthy();

    })

    it('Remove this todo',()=>{
        const onRemove = jest.fn();
        const {btnRemove}= utils({onRemove});

        fireEvent.click(btnRemove);
        expect(onRemove).toBeCalledWith(sampleTodo.id);
    })

    it('shows line-throug on spanTodoContent by toggle function',()=>{

        const onToggle = jest.fn();
        const {spanTodoContent, id} = utils({onToggle, todo:{...sampleTodo,done:true}});

        fireEvent.click(spanTodoContent);
        expect(onToggle).toBeCalledWith(id);

        expect(spanTodoContent).toHaveStyle('text-decoration : line-through');
    })

    it('Dose not shows line-throug on spanTodoContent by toggle function',()=>{

        const onToggle = jest.fn();
        const {spanTodoContent, id} = utils({onToggle, todo:{...sampleTodo,done:false}});

        fireEvent.click(spanTodoContent);
        expect(onToggle).toBeCalledWith(id);

        expect(spanTodoContent).toHaveStyle('text-decoration : none');
    })
})