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

const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;
  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    // To unsubscribe a listener form the listeners we return a function that removers that listener from listeners array
    
    return () => {
      listener = listeners.filter(l => l !== listener);
    }

  }

  dispatch({});

  return  { getState, dispatch, subscribe}
}

// creating the store
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
