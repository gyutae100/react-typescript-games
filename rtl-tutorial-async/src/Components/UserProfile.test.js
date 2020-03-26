import React from 'react';
import { render, waitFor } from '@testing-library/react';
import UserProfile from './UserProfile';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('<UserProfile />', ()=>{
    const mock = new MockAdapter(axios, {delayResponse:200});   //200ms짜리 가짜 딜레이 설정
    
    //api 요청에 대해서 응답 미리 정하기
    mock.onGet('https://jsonplaceholder.typicode.com/users/1').reply(200,{
        id:1,
        name:'Leanne graham',
        username:'bret',
        email:'slslslsl@apapap.biz'
    });
    it('loads userData properly', async()=>{
        const { getByText } = render(<UserProfile id={1} />);
        await waitFor(() => getByText('로딩중..')); // 로딩중.. 문구 보여줘야함
        await waitFor(() => getByText('bret')); // Bret (username) 을 보여줘야함
    })
})