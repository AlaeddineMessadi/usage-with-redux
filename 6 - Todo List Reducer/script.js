const testToggleTodo = () => {
  const todoBefore = {
    id: 0,
    text: 'ReactRedux',
    checked: false
  },
  todoAfter = {
    id: 0,
    text: 'ReactRedux',
    checked: true
  };

  deepFreeze(todoBefore);

  expect(
    toggleTodo(todoBefore)
  ).toEqual(todoAfter);
}

testToggleTodo();
console.log('----------------------------------');
console.log('Test Toggle Todo in Object Pass!!!');
console.log('----------------------------------');


//  However we need to avoid Mutation in Redux, and to enforce this we call deepFreeze(listBefore)

