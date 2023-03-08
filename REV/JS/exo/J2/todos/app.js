import fetch from "node-fetch";

const $todoList = document.getElementById("todos");

const fetchTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();

    for(let i = 0; i < 3; i++) {
        const todo = todos[i];
        const li = document.createElement("li");
        li.innerHTML = `Title: ${todo.title} | Status: ${todo.completed ? "Completed" : "ToDo"}`
        li.classList.add("result");
        $todoList.appendChild(li);
        await new Promise(resolve => setTimeout(resolve, 500));
    }
}

document.addEventListener('DOMContentLoaded', ev => fetchTodos());