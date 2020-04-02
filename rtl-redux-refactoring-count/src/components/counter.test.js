import React from "react";
import Counter from './Counter';
import { render, fireEvent } from "@testing-library/react";


describe('<Counter />', ()=>{

    const setup = (props={})=>{

        const defaultProps ={number : 0};
        const utils = render(<Counter {...defaultProps} {...props} />)

        const number = utils.getByText((props.number || defaultProps.number).toString());
        const btnPlus = utils.getByText('+');
        const btnMinus = utils.getByText('-');

        return{
            utils,
            number,
            btnMinus,
            btnPlus
        }
    }

    it('should render default counter', ()=>{
        const {btnPlus, btnMinus, number} = setup();

        expect(number).toHaveTextContent('0');
        expect(btnPlus).toBeTruthy();
        expect(btnMinus).toBeTruthy();
    })

    it('should render counter with number 8', ()=>{
        const {btnPlus, btnMinus, number} = setup({number:8});

        expect(number).toHaveTextContent('8');
        expect(btnPlus).toBeTruthy();
        expect(btnMinus).toBeTruthy();
    })

    it('should click plusBtn and minusBtn', ()=>{
        
        const onDecrease = jest.fn();
        const onIncrease = jest.fn();
        const {btnPlus, btnMinus} = setup({onDecrease, onIncrease});

        fireEvent.click(btnPlus)
        expect(onIncrease).toBeCalled();

        fireEvent.click(btnMinus)
        expect(onIncrease).toBeCalled();
    })


})