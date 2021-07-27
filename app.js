let addTodo = document.getElementById('addTodo');
let inputField = document.getElementById('inputField');
let todoContainer = document.getElementById('todoContainer');

addTodo.addEventListener('click', function() {
    let todo = document.createElement('p');
    todo.classList.add('paragraph-style');
    todo.innerText = inputField.value;
    todoContainer.appendChild(todo);
    todo.addEventListener('click', function() {
        todo.style.textDecoration = 'line-through';
    })
    todo.addEventListener('dblclick', function() {
        todoContainer.removeChild(todo);
    })
})