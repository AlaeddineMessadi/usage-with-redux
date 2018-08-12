const counter = (state = 0, action) => {
    switch (action.type){
        case 'INCREMENT':
         return state+1;
        case 'DECREMANT':
          return state-1;
        default:
          return state;
    }
}

expect(
    counter(0, {type: 'INCREMENT'})
).toEqual(1);

expect(
    counter(1, {type: 'INCREMENT'})
).toEqual(2);

expect(
    counter(2, {type: 'DECREMANT'})
).toEqual(1);

expect(
    counter(5, {type: 'DECREMANT'})
).toEqual(4)

console.log('Tests passed!!!')