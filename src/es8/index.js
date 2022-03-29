// format object into a matrix
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);
// get only values from object
const data2 = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'  
}
const values = Object.values(data2);
console.log(values);

const string = 'hello';
console.log(string.padStart(7,'hi'))
// async await
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('test error'))
    })
};
const helloAsync = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    }catch (error) {
        console.log(error);
    }
};
helloAsync();
