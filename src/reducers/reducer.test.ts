import {reducer, StateType} from "./reducer";


test('collapsed should be true', () => {

    const startState: StateType  = {
        collapsed:false
    }

    const endState = reducer(startState, {type:"TOGGLE-COLLAPSED"})

    expect(endState.collapsed).toBe(true);

});


test('collapsed should be false', () => {

    const startState: StateType  = {
        collapsed:true
    }

    const endState = reducer(startState, {type:"TOGGLE-COLLAPSED"})

    expect(endState.collapsed).toBe(false);

});

// test('reducer should throw error because action type is incorrect', () => {
//
//     const startState: StateType  = {
//         collapsed:true
//     }
//
//     expect(()=>{ reducer(startState, {type:"FAKETYPE"})}).toThrowError();
//
// });