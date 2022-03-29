// replace all
const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro.";
const replacedString = string.replaceAll("JavaScript", "Python");
console.log(replacedString);
// private methods for classes
class Message {
    #show(val){
        console.log(val);
    };
    get #add(){
        //
    }
    set #add(val){
        //
    }
}
const myMessage = new Message();
myMessage.show("Hi!");
// promise any, returns the first promise which resolves correctly
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));
Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));
// weak ref
class anyClass {
    constructor(element){
        this.ref = new WeakRef(element)
    }
}
// new operators
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue1 = true;
let isFalse1 = false;
console.log(isTrue1 ||= isFalse1);

let isTrue2 = undefined;
let isFalse2 = false;
console.log(isTrue2 ??= isFalse2);