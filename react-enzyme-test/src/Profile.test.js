import React from 'react';
import { mount } from 'enzyme';
import Profile from './Profile';

describe('<Profile />', ()=>{
    it('matches snapshot', ()=>{
        const wrapper = mount(<Profile username="kim" name="gyutae" />);
        expect(wrapper).toMatchSnapshot();
    })

    it('renders username and name',()=>{
        const wrapper = mount(<Profile username="kim" name="gyutae" />);
        
        //props확인
        expect(wrapper.props().username).toBe('kim');
        expect(wrapper.props().name).toBe('gyutae')
    
        //dom 확인
        const boldElement =wrapper.find('b');
        expect(boldElement.contains('kim')).toBe(true);
        const spanElement = wrapper.find('span');
        expect(spanElement.text()).toBe('gyutae');

    })
})