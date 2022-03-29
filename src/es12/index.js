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
let a = 2;
let b = 3;
console.log(a &&= b);
// &&= is equal to write:
//if(a){
//    a = b;
//}

let a1 = 5;
let b1 = 0;
console.log(a1 ||= b1);
// ||= is equal to write:
//if(!a){
//    a = b;
//}

let a2 = 3;
let b2 = null;
console.log(a2 ??= b2);
// ??= is equal to write:
//if(a = null || a = undefined){
//    a = b;
//}