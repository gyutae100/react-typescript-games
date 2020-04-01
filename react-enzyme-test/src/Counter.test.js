import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';

describe('<Counter />', ()=>{

    it('matches snapshot', ()=>{
        const wrapper = shallow(<Counter />);
        expect(wrapper).toMatchSnapshot();
    })

    it('has initial number', ()=>{
        const wrapper = shallow(<Counter />);
        expect(wrapper.state().number).toBe(0);
    })

    


})