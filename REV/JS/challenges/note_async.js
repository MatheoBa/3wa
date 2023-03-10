

//sync
const synchronizeFunc = () => {
    console.log("Start function");
}

console.log("Start");
synchronizeFunc();
console.log("End");



//async
console.log("Start");
setTimeout(() => console.log("Hello world !"), 1000);
console.log("End");