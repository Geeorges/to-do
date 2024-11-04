let todoForm = document.getElementById("todo-form");
let todoList = document.getElementById("todo-list");
let ctaAdd = document.getElementById("todo-add");
let doneList = document.getElementById("done-list");


/* form submit */

todoForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    let data = Object.fromEntries(formData.entries());
    let todoText = data['todo-input'];
    let input = document.getElementById("todo-input");
    createListItem(todoText);
    editListItem();
    removeListItem();
    completeListItem();
    event.target.reset();
    input.focus();
});

todoList.addEventListener('submit', function (event) {
    event.preventDefault();
});
