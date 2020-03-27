import React from 'react';
import { render, fireEvent} from '@testing-library/react';
import TodoApp from '.';


describe('<TodoApp />', ()=>{
    
    it('has inner components',()=>{

        const { getByText, getByTestId } = render(<TodoApp />);
        getByText('추가'); // TodoForm 존재유무 확인
        getByTestId("TodoList"); // TodoList 존재유무 확인
    })
    
    it('renders two defaults todos', ()=>{
        const {getByText} = render(<TodoApp />);
        getByText('TDD 배우기');
        getByText('react-testing-library 사용하기');
    })

    it('creates new todo', ()=>{
        const {getByPlaceholderText, getByText} = render(<TodoApp />);

        fireEvent.change(getByPlaceholderText('Todo를 입력해 주세요'),{
            target:{
                value:'새 항목 추가하기'
            }
        })
        fireEvent.click(getByText('추가'));
        getByText('새 항목 추가하기')
    })

    it('toggles todo', ()=>{
        const {getByText} =render(<TodoApp />);
        const todoText = getByText('TDD 배우기');
        expect(todoText).toHaveStyle('text-decoration : line-through');
        fireEvent.click(todoText);
        expect(todoText).not.toHaveStyle('text-decoration : line-through');
        fireEvent.click(todoText);
        expect(todoText).toHaveStyle('text-decoration : line-through');
    })

    it('removes todo', ()=>{
        const {getByText} = render(<TodoApp />);
        const todoText = getByText('TDD 배우기');
        const removeButton = todoText.nextSibling;
        fireEvent.click(removeButton);
        expect(todoText).not.toBeInTheDocument();
    })
})



