/*  local storage */

//localStorage.removeItem('items-todo');
//localStorage.removeItem('items-done');
//localStorage.setItem('items', JSON.stringify(itemsArray));


let itemsTodo = localStorage.getItem("items-todo") ? JSON.parse(localStorage.getItem("items-todo")) : [];
let itemsDone = localStorage.getItem("items-done") ? JSON.parse(localStorage.getItem("items-done")) : [];


function storeTodoItems(value) {
    // Push the new item into the array
    itemsTodo.push(value);

    // Optionally, save the updated array back to localStorage
    localStorage.setItem("items-todo", JSON.stringify(itemsTodo));
    
    // Check the updated array
    console.log(itemsTodo);
}

function storeDoneItems(value) {
    // Push the new item into the array
    itemsDone.push(value);

    // Optionally, save the updated array back to localStorage
    localStorage.setItem("items-done", JSON.stringify(itemsDone));
    
    // Check the updated array
    console.log("Hotovo: " + itemsDone);
}


function updateEditedItem(editedItem, newItem){
    let itemsTodo = localStorage.getItem("items-todo") ? JSON.parse(localStorage.getItem("items-todo")) : [];

    //itemsTodo = itemsTodo.filter(item => item !== editedItem);
    
    const index = itemsTodo.indexOf(editedItem);

    if (index !== -1) {
        // Replace the old item with the new item
        itemsTodo[index] = newItem;

        // Save the updated array back to localStorage
        
        console.log("Updated item: " + editedItem + " to " + newItem);
        localStorage.setItem("items-todo", JSON.stringify(itemsTodo));
    } else {
        console.log("Item not found: " + editedItem);
    }

    

   /*  itemsTodo.push(newItem);

    localStorage.setItem("items-todo", JSON.stringify(itemsTodo));

    console.log("upravil jsi: " + editedItem); */
}

function deleteTodoItem(itemToDelete) {
    // Retrieve existing items from localStorage or initialize an empty array
    let itemsTodo = localStorage.getItem("items-todo") ? JSON.parse(localStorage.getItem("items-todo")) : [];
    
    // Filter out the item to delete
    itemsTodo = itemsTodo.filter(item => item !== itemToDelete);
    
    // Save the updated array back to localStorage
    localStorage.setItem("items-todo", JSON.stringify(itemsTodo));
    
    // Optional: Log the updated array
    console.log("todo: " + itemsTodo);
}


function loadItems(){
    localStorage.setItem("items-todo", JSON.stringify(itemsTodo));
    localStorage.setItem("items-done", JSON.stringify(itemsDone));

    itemsTodo.forEach(item => {
        createListItem(item);
        editListItem();
        removeListItem();
        completeListItem();
    });

    itemsDone.forEach(item => {
        createDoneItem(item);
    });

    checkIfEmpty();
}

loadItems();