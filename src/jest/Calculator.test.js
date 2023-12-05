import {add,diff} from './jest/Calulator';
test("add two numbers",()=>{
    expect(add(1,2)).toBe(3);
    expect(add(-1,1)).toBe(0);
    expect(add(-1,-2)).toBe(-3);
});
test("subtracts two numbers",()=>{
    expect(diff(3,2)).toBe(1);
    expect(diff(-1,1)).toBe(-2);
    expect(diff(0,5)).toBe(-5);
});