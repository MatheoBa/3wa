const $todoList = document.querySelector('#todos'); // Récupérer la balise HTML <ul> où les todos seront affichés
const todos = []; // Tableau vide qui va contenir les todos affichés

const fetchTodos = async () => { // Récupérer la liste des todos depuis une API externe
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    return await response.json();
}

const fetchUserById = async (userId) => { // Récupérer un utilisateur depuis une API externe en fonction de son id
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return await response.json();
}

function wait(delay) { // Fonction qui attend un certain temps avant de résoudre la promesse (simuler un temps de chargement)
    return new Promise(resolve => setTimeout(resolve, delay));
}

const getHtmlForTodoAtIndex = async (todoData) => { // Récupérer le code HTML d'un to do en fonction de son index dans la liste des todos
    const userData = await fetchUserById(todoData.userId);
    todos.push(todoData);
    return `<li>${todoData.title} | Status: ${todoData.completed ? "✔" : "❌"} | ${userData.name} </li>`;
}

const displayUserInfo = (user) => { // Récupérer les informations de l'utilisateur et les ajouter au DOM
    const userInfoElement = document.createElement('div');
    userInfoElement.classList.add('user-info');
    userInfoElement.innerHTML = `<h2>${user.name}</h2> 
                                 <a href="mailto:${user.email}">${user.email}</a> <br>
                                 <a href="https://${user.website}">${user.website}</a> <br> 
                                 <a href="tel:${user.phone}">${user.phone}</a>` ;
    $todoList.appendChild(userInfoElement);
}

const displayFirstThreeTodos = async () => {
    const todoData = await fetchTodos();
    for(let i = 0; i < 3; i++) { // Afficher les trois premiers todos
        $todoList.innerHTML += await getHtmlForTodoAtIndex(todoData[i]);
        await wait(500); // Attendre 500ms avant d'afficher le to do suivant
    }
    // Afficher le premier user
    const user = await fetchUserById(todos[0].userId);
    displayUserInfo(user);
}

document.addEventListener('DOMContentLoaded', displayFirstThreeTodos); // Afficher les todos une fois que le DOM est chargé