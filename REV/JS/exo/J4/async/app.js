function sync() {
    console.log('hello 1');
    fetch("https://jsonplaceholder.typicode.com/users").then(() => console.log("hello 3"));
    console.log("hello 2");
}

async function async() {
    console.log('hello 1');
    await fetch("https://jsonplaceholder.typicode.com/users").then(() => console.log("hello 2"));
    console.log("hello 3");
}

sync()
async()