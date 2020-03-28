const {sum, sumOf} = require('./sum');

describe('sum', ()=>{
    it('1 + 2 = 3', ()=>{
        expect(sum(1,2)).toBe(3);
    })
    
    it('calculates all numbers', ()=>{
        const array =[1,2,3,4,5];
        expect(sumOf(array)).toBe(15);
    })
})
