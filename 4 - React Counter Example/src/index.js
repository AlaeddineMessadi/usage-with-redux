const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
console.log(ReactDOM)
// creating the store
const store = createStore(counter);
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');


const Counter = ({
  value,
  onIncrement,
  onDecrement
}) => {
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={onIncrement}>INCREMENT</button>
      {'&'}
      <button onClick={onDecrement}>DECREMENT</button>
    </div>
  )
}

const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => {
        store.dispatch({
          type: 'INCREMENT'
        })
      }}
      onDecrement={() => {
        store.dispatch({
          type: 'DECREMENT'
        })
      }}
    />
    ,
    document.getElementById('root')
  )
};
// Subscribe The render function to continuously update the text in the DOM 
store.subscribe(render);

render();

increment.addEventListener('click', (e) => {
  store.dispatch({ type: 'INCREMENT' })
})

decrement.addEventListener('click', (e) => {
  store.dispatch({ type: 'DECREMENT' })
})
