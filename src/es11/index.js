// dynamic import, is loaded it when it's needed
const btn = document.getElementById("btn");
btn.addEventListener("click", async () => {
  const module = await import("./file.js");
  module.MyFunction();
});
// big int
const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);
console.log(aBigNumber);
console.log(anotherBigNumber);
// promises all/allsettled
const promise1 = new Promise((resolve, reject) => reject('reject'));
const promise2 = new Promise((resolve, reject) => resolve('resolve'));
const promise3 = new Promise((resolve, reject) => resolve('resolve1'));
// it doesn't matter the promises result, it'll wait to all of them finish
Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));
// it does matter the promises result
Promise.all([promise1, promise2, promise3])
    .then(response => console.log(response));

//global objects
console.log(window);
console.log(globalThis);
// null logic operator
const foo = null ?? 'empty string';
console.log(foo);
// optional shining
const user = {}
console.log(user?.profile?.email); // indefined, doesn't break the code execution

