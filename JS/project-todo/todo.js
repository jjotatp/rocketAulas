var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

// var todos = [
var todos = JSON.parse(localStorage.getItem('list_todos'));
//     'Fazer Café',
//     'Estudar Javascript',
//     'Acessar comunidade da Rocketseat'
// ];

function renderTodos() {
    //tudo o que estiver dentro de ul deixar vazio
    listElement.innerHTML = '';

    for (todo of todos) {
        var todoElement = document.createElement('li');
        //Essa variavel escreve o que tiver na variavel todo
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var linkText = document.createTextNode(' Excluir');

        linkElement.appendChild(linkText);

        //indexOf retorna o index do ciclo do For        
        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos +')')

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo() {
    var todoText = inputElement.value;

    todos.push(todoText);

    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
    //ele vai na posição escolhida, e remoce um
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}