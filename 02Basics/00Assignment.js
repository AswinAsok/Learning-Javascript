const person = {name: 'JS', age :25 , abbreviation: 'JS'};
const valuesArr = Object.values(person);
delete person['name']
delete person['age']
const keysArr = Object.keys(person)

console.log(valuesArr);
console.log(keysArr);