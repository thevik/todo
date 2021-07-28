let addTodo = document.getElementById('addTodo');
let inputField = document.getElementById('inputField');
let todoContainer = document.getElementById('todoContainer');

addTodo.addEventListener('click', function() {
    // saving data
    localStorage.setItem('todos', JSON.stringify(inputField.value))
    let savedtodo = localStorage.getItem('todos')
    let localtodo = JSON.parse(savedtodo)
    // adding todo
    let todo = document.createElement('p');
    todo.classList.add('paragraph-style');
    todo.innerText = localtodo;
    // displaying todo
    todoContainer.appendChild(todo)
    // adding click function to complete the task
    todo.addEventListener('click', function() {
        todo.style.textDecoration = 'line-through';
    })
    // adding double click function to delete the task
    todo.addEventListener('dblclick', function() {
        todoContainer.removeChild(todo);
    })
})