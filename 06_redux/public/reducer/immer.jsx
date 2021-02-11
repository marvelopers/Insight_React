import produce from 'immer';

const person = { name: 'chloe', age: 28 };

const newPerson = produce(person, draft => {
  draft.age = 30
});

