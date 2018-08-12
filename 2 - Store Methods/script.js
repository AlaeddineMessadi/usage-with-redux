const counter = (state = 0, action) => {
    switch (action.type){
        case 'INCREMENT':
         return state+1;
        case 'DECREMENT':
          return state-1;
        default:
          return state;
    }
}

const { createStore } = Redux;
// var createStor = Redux.createStore;
// import { createStor } from 'redux

/**
 * Two important Methods the getState and Dispatch to dispatch an action
 */
const store = createStore(counter);
const result = document.getElementById('result');
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');


const render = () => {
  result.innerText = store.getState();
}
// Subscribe The render function to continuously update the text in the DOM 
store.subscribe(render);

render();

increment.addEventListener('click', (e) => {
  store.dispatch({type: 'INCREMENT'})
})

decrement.addEventListener('click', (e) => {
  store.dispatch({type: 'DECREMENT'})
})
