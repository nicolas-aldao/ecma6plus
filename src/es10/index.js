// flat
let array = [1,2,3,[1,2,3,[1,2,3]]]
console.log(array.flat(1));
console.log(array.flat(2));
// map
let array2 = [1,2,3,4,5,'pe'];
console.log(array2.flatMap(value => [value, value + '2']));
// delete white spaces
let hello = '             hello!!';
console.log(hello);
console.log(hello.trimStart());
let hello2 = 'hello!!                ';
console.log(hello2);
console.log(hello2.trimEnd());
// optional error var in error try
try {
    throw ReferenceError();
} 
catch { // (error) is not obligatory
    //console.log(`Ups! ${error}`);
}
// parse array to obj
let entries = [['name', 'oscar'], ['age', 32]];
console.log(Object.fromEntries(entries));
// symbols
let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);




