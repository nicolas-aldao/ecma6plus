// optional parameters
function newFunction(name = "Osvaldo", age = 10, country = "URU") {
  console.log(name, age, country);
}

newFunction();
newFunction("Braian");

// concatenate variable strings
let hello = "Hello";
let world = "World";
console.log(`${hello} ${world}`);

// strings with breaklines
let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
sunt in culpa qui officia deserunt mollit anim id est laborum."`;
console.log(loremIpsum);

// desestructurate objects
let ball = {
  type: "soccer",
  weight: 10,
  country: "ARG",
};
let { type, weight } = ball;
console.log(type, weight);

// variables
let localScope = "abc"; // local scope
var globalScope = "dce"; // global scope
const constantVariable = "f"; // constant, local scope

// spread operator
let team1 = ["Diego", "Carolina", "Fabián"];
let team2 = ["Sergio", "Ricardo", "Román"];
let team3 = ["Raúl", ...team1, ...team2];
console.log(team3);

// delete duplicates in spread operator
let team1d = ["Diego", "Carolina", "Fabián"];
let team2d = ["Sergio", "Diego", "Román"];
let team3d = new Set(["Raúl", ...team1d, ...team2d]);
console.log(team3d);

// creating objects form variables
let animal = "cat";
let petName = "Garfield";
let petAge = 4;
let myPet = { animal, petName, petAge };
console.log(myPet);

// anoms functions
const people = [
  { namePerson: "Braian", age: 15, alias: "El flako" },
  { namePerson: "Mariano", age: 17, alias: "Naz" },
];
//1. prev ecma6
const aliasList = people.map(function (person) {
  console.log(person.alias);
});
//2. arrow functions
const aliasList2 = namePerson.map((item) => console.log(item.alias));
const aliasList3 = (windows, rooms, color) =>
  console.log(windows, rooms, color);
aliasList3(2, 1, "yellow");
const favoriteColor = (color) => console.log(`favorite color is ${color}`);
favoriteColor("green");
// function takes num parameter, and return the result of num * num
const squareFunction = num => num * num; 

// promises: every promise returns a resolve or reject object, it can follow of a .then or .catch block
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve("yE.");
        } else{
            reject("nOup.");
        }
    })
}
helloPromise()
    .then(response => console.log(response))
    .then(() => console.log("Heyyy"))
    .catch(error => console.log(error))
    .finally(() => console.log("The promise ended."));

// classes
class Calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
         this.valueA = valueA;
         this.valueB = valueB;
         return this.valueA + this.valueB;
    }
}
const calc = new Calculator();
console.log(calc.sum(2, 2));

// import modules
import { hello } from './module.js';
hello();

// generators
function* helloWorld() {
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'world';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);