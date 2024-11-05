let todoForm = document.getElementById("todoForm");
let todoList = document.getElementById("todoList");
let ctaAdd = document.getElementById("todoAdd");
let doneList = document.getElementById("doneList");

let listItemId = 0;


/* form submit */



todoForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    let data = Object.fromEntries(formData.entries());
    let todoText = data['todo-input'];
    let input = document.getElementById("todo-input");

    createListItem(todoText);
    storeTodoItems(todoText);
  
    editListItem();
    removeListItem();
    completeListItem();

    event.target.reset();
    input.focus();
    listItemId = listItemId + 1;
});

todoList.addEventListener('submit', function (event) {
    event.preventDefault();
});




/* sort items */

const sortableList = document.getElementById('todoList');

Sortable.create(sortableList, {
    animation: 150,
    easing: "cubic-bezier(0.7, 0, 0.3, 1)",
    chosenClass: "chosen", // Class applied to the element being dragged
    ghostClass: "ghost" // Class applied to the placeholder position
});
