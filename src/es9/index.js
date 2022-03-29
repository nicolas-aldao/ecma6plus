// fragment object
const obj = {
    namePerson: 'oscar',
    age: 32,
    country: 'MX'
}
let {namePerson, ...all} = obj;
console.log(namePerson);
console.log(all);
// object composition
const obj1 = {
    name: 'Roger',
    age: 72
}
const obj2 = {
    ...obj1,
    band: 'Pink Floyd'
}
console.log(obj2)
// promises: finally
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        console.log('Promise begins...');
        (true)
            ? setTimeout(() => resolve('Hey'), 5000)  
            : reject(new Error("Ups"));
        });
}
helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(
`The error: 
    ${error.stack}
End of error.`))
    .finally(() => console.log('Promise ended'));
// regex features
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2022-04-20');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(`El año es ${year}`);