import React from "react";
import renderWithRedux from "../renderWithRedux";
import CounterContainer from "./CounterContainer";
import { fireEvent } from "@testing-library/react";

describe("<CounterContainer />", ()=>{
    it("shows the default number 0", ()=>{
        const {getByText} =renderWithRedux(<CounterContainer />)
    });
    it('should increase when +1 is clicked', ()=>{
        const {getByText} =renderWithRedux(<CounterContainer />);
        fireEvent.click(getByText("+1"));
        getByText("1")
    })
    it("should decrease when -1 is clicked", ()=>{
        const {getByText, store} =renderWithRedux(<CounterContainer />);
        const number = getByText("0");
        fireEvent.click(getByText("-1"));
        expect(number).toHaveTextContent("-1");
    })
})