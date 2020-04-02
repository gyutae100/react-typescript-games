import React from "react";
import CounterContainer from './CounterContainer';
import renderWithRedux from '../renderWithRedux';
import { fireEvent } from "@testing-library/react";

describe('<CounterContainer />', ()=>{

    it('should render', ()=>{
        const {getByText} = renderWithRedux(<CounterContainer />)
        const number =getByText("0");
        expect(number).toHaveTextContent('0');

        const btnPlus =getByText("+");
        expect(btnPlus).toHaveTextContent('+');

        const btnMinus =getByText("-");
        expect(btnMinus).toHaveTextContent('-');
    })

    it('should handle plush event', ()=>{
        const { getByText }   =renderWithRedux(<CounterContainer />)

        const number =getByText("0");

        const btnPlus =getByText("+");

        fireEvent.click(btnPlus);

        expect(number).toHaveTextContent('1');
    })

    it('should handle minus event', ()=>{
        const { getByText }   =renderWithRedux(<CounterContainer />)

        const number =getByText("0");

        const btnMinus =getByText("-");

        fireEvent.click(btnMinus);

        expect(number).toHaveTextContent('-1');
    })
    
})