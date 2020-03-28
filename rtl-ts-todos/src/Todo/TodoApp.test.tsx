import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoApp from './TodoApp';


//통합 테스트
describe('<TodoApp />',()=>{

    it('has components', ()=>{
        const {getByTestId}  =render(<TodoApp />);

        const insertTodo = getByTestId('InsertTodo');
        const todoList = getByTestId('TodoList');

        expect(insertTodo).toBeTruthy();
        expect(todoList).toBeTruthy();

    })

    it('render components definitely',()=>{
        const {getByText, getAllByText}  =render(<TodoApp />);

        const btnAddTodo = getByText('등록');
        expect(btnAddTodo).toBeTruthy();

        const btnRemoveTodo = getAllByText('삭제')[0];
        expect(btnRemoveTodo).toBeTruthy();
    })

    it('insert todo item', ()=>{
        const {getByText, getByPlaceholderText}  =render(<TodoApp />);

        const inputAddTodo = getByPlaceholderText('여기에 Todo를...');

        fireEvent.change(inputAddTodo,{
            target:{
                value:'new todo'
            }
        })

        const btnAddTodo = getByText('등록');
        
        fireEvent.click(btnAddTodo);

        const newSpanTodoItem = getByText('new todo');
        expect(newSpanTodoItem).toBeTruthy();
    })

    it('remove todo item', ()=>{
        const {getAllByText}  =render(<TodoApp />);

        const btnRemoveTodo = getAllByText('삭제')[0];
        expect(btnRemoveTodo).toBeTruthy();

        fireEvent.click(btnRemoveTodo);

        expect(btnRemoveTodo).not.toBeInTheDocument();
    })

    it('toggle todo item', ()=>{
        const {getByText}  =render(<TodoApp />);

        const spanTodo = getByText('0');

        fireEvent.click(spanTodo);
        expect(spanTodo).toHaveStyle('text-decoration : none');

        fireEvent.click(spanTodo);
        expect(spanTodo).toHaveStyle('text-decoration : line-through');

    })


});
