/* FUNCTIONS */

//show box if not empty
function checkIfEmpty(){
    let todoBox = document.querySelectorAll(".todo__box");

    todoBox.forEach(box => {
        if (box.children.length > 0) {
            box.classList.add("active");
        } else {
            box.classList.remove("active");
        }
    });
}

/* complete list item */
function completeListItem() {
    let inputWrapper = document.querySelectorAll(".input__wrapper")
    
    inputWrapper.forEach(wrapper => {
        let ctaCheck = wrapper.querySelector(".check__cta");

        ctaCheck.replaceWith(ctaCheck.cloneNode(true));
        ctaCheck = wrapper.querySelector(".check__cta");

        ctaCheck.addEventListener('click', function (event) {
            event.preventDefault();
            let item = wrapper.querySelector("input");
            let itemValue = "";
            itemValue = wrapper.querySelector("input");
            itemValue = itemValue.value;
            
            let content = wrapper.getAttribute("data-content");
            
            if (itemValue.textContent == " "){
                item.setAttribute("requiery", "true");
            } else{
                item.setAttribute("requiery", "false");

                createDoneItem(content);
                storeDoneItems(content);
                deleteTodoItem(content);

                wrapper.remove();
                checkIfEmpty();
            }
        });
    });
}

/* remove list item */
function removeListItem() {
    let inputWrapper = document.querySelectorAll(".input__wrapper")
    
    inputWrapper.forEach(wrapper => {
        let ctaDelete = wrapper.querySelector(".delete__cta");

        ctaDelete.addEventListener('click', function (event) {
            event.preventDefault();

            let content = wrapper.getAttribute("data-content");

            deleteTodoItem(content);

            wrapper.remove();
            checkIfEmpty();
        });
    });
}

/* edit list item */
function editListItem() {
    let inputWrapper = document.querySelectorAll(".input__wrapper");
    
    inputWrapper.forEach(wrapper => {
        let ctaEdit = wrapper.querySelector(".edit__cta");

        //Remove any existing event listeners first (if any)
        ctaEdit.replaceWith(ctaEdit.cloneNode(true));
        ctaEdit = wrapper.querySelector(".edit__cta");

        // Attach the event listener
        ctaEdit.addEventListener('click', function (event) {
            event.preventDefault();
            let input = wrapper.querySelector("input");
            
            if (ctaEdit.classList.contains("edit__cta--active")){
                ctaEdit.classList.remove("edit__cta--active");
                ctaEdit.setAttribute("data-title", "Edit");

                input.title = input.value;
                
                let content = wrapper.getAttribute("data-content");
                updateEditedItem(content, input.value);

                wrapper.setAttribute("data-content", input.value);

            }
            else{
                ctaEdit.classList.add("edit__cta--active");
                ctaEdit.setAttribute("data-title", "OK");
            }

            // Toggle the readOnly property
            input.readOnly = !input.readOnly; 
            if (!input.readOnly) {
                input.focus();
                input.setSelectionRange(input.value.length, input.value.length);
            }
        });
    });
}

//create new to-do item
function createListItem(newItem) {

    //delete cta
    let newDeleteCta = document.createElement("a");
    newDeleteCta.classList.add("delete__cta");
    newDeleteCta.setAttribute("data-title", "Delete");

    //edit cta
    let newEditCta = document.createElement("a");
    newEditCta.classList.add("edit__cta");
    newEditCta.setAttribute("data-title", "Edit");

    //edit wrapper
    let newEditWrapper = document.createElement("div");
    newEditWrapper.classList.add("edit__wrapper");

    //input
    let newInput = document.createElement("input");
    newInput.type = 'text'; 
    newInput.name = 'list-item'; 
    newInput.readOnly = true; 
    newInput.value = newItem;
    newInput.title = newInput.value;

    //wrapper
    let newInputWrapper = document.createElement("div");
    newInputWrapper.classList.add("input__wrapper");
    //newInputWrapper.setAttribute("data-id", listItemId)
    newInputWrapper.setAttribute("data-content", newInput.value)

    //check
    let newCheck = document.createElement("a");
    newCheck.classList.add("check__cta");
    newCheck.setAttribute("data-title", "Done");

    //append
    newInputWrapper.appendChild(newCheck);
    newInputWrapper.appendChild(newInput);
    newInputWrapper.appendChild(newEditWrapper);
    newEditWrapper.appendChild(newEditCta);
    newEditWrapper.appendChild(newDeleteCta);
    todoList.appendChild(newInputWrapper);

    checkIfEmpty();


}

//create new done item
function createDoneItem(doneItem) {
    //input
    let itemDone = document.createElement("p");
    itemDone.textContent = doneItem;

    //append
    doneList.appendChild(itemDone);
}