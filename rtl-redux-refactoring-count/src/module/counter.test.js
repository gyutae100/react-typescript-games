import React from "react";
import counter from './counter';
import * as actions from './counter';


describe('<Counter />', ()=>{

    it('should making actions', ()=>{
        expect(actions.increase()).toStrictEqual({type:'counter/INCREASE'})
        expect(actions.decrease()).toStrictEqual({type:'counter/DECREASE'})
    })

    describe('should reducer working',()=>{
        
        const initialState = {
            number:0
        };

        it('shoud have initial State', ()=>{
            const state = counter(initialState, {});
            expect(state).toStrictEqual({number:0});
        })

        it('should handle INCREASE action',()=>{
            //increase
            const state2 = counter(undefined,actions.increase());
            expect(state2).toStrictEqual({number:1});
        })

        it('should handle DECREASE action', ()=>{
            //decrease
            const state3 = counter(undefined,actions.decrease());
            expect(state3).toStrictEqual({number:-1});
        })
    })
})