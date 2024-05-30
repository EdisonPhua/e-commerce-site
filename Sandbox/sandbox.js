const component = (age) => {
    let name = age > 18 ? 'Adult' : "Child";
    console.log(`Hello ${name}!`);

}

const person ={
    name: 'John',
    age: 14,
    ismarried : false
}


const {name, age, ismarried} = person;
console.log(name, age, ismarried);