const addToList = (list) => {

  // the test will past, but if call the deepFreeze it will not as we're mutating the list.
  list.push(0);
  // return list;

  // to avoid that we can use the concat method in array which does not modify the original array
  const newList = list.concat([0])
  // return newList;

  //  and we can also use the new ES6 spread operator to write the same code in more concise way 
  return [...list, 0];
};

const removeFromList = (list, index) => {

  // usually we use the splice method but it's mutating method, we can't use it in redux
  list.splice(index, 1);
  //  return list;
  
  // we'll use slice, it's not mutating but it just give back a part of array from 0 to index and the part
  // after index of the array and concatinate them together.
  return list.slice(0, index)
  .concat(list.slice(index + 1))

  // to make it more concise we can use the spread operator 
  return [
    ...list.slice(0, index),
    ...list.slice(index+1)
  ]
};

// for changing a value in the array it's very similar to the remove aproach
// select the first part of the array to index, concat it with the new value then concat the rest of the array 

/* 
  retun [
    ...list.slice(0, index),
    newValue,
    ...list.slice(index+1)
  ]
*/



const testAddToList = () => {
  const ListBefore = [];
  const ListAfter = [0];

  // deepFreeze(listBefore)

  expect(
    addToList(ListBefore) 
  ).toEqual(ListAfter)
}

testAddToList();
console.log('--------------------------')
console.log('Test Add To List pass!!!')
console.log('--------------------------')


const testRemoveFromList = () => {
  const ListBefore = [0,1,2];
  const ListAfter = [0,2];

  // deepFreeze(listBefore)

  expect(
    removeFromList(ListBefore, 1) 
  ).toEqual(ListAfter)
}

testRemoveFromList();
console.log('------------------------------')
console.log('Test Remove From Array Pass!!!')
console.log('------------------------------')

//  However we need to avoid Mutation in Redux, and enforece this we call deepFreeze(listBefore)

