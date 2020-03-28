import React from 'react';
import { render } from '@testing-library/react';
import Profile from './Profile';

describe('<Profile />', ()=>{
    it('match snapshot', ()=>{
        const utils = render(<Profile username="gyutae" name="alphonse" />);
        expect(utils.container).toMatchSnapshot()
    })
    it('shows the props correctly', ()=>{
        const utils = render(<Profile username="gyutae" name="alphonse" />);
        utils.getByText('gyutae');  //gyutae 라는 텍스트를 가진 엘리먼트가 있는지 확인
        utils.getByText('(alphonse)');
    })
})