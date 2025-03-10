//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todolist= document.querySelector('.todo-list');

//event Listeners
todoButton.addEventListener('click' , addTodo);
todolist.addEventListener( "click", deleteCheck);
//Functions 

function addTodo(event) {
    //Prevent form from submitting
    event.preventDefault();
    //Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //CHECK MARK BUTTON
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //CHECK trash BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //APPEND TO LIST
    todolist.appendChild(todoDiv);
    //Clear Todo INPUT VALUE
    todoInput.value = "";
   }

function deleteCheck(e) {
    const item = e.target;
    //DELETE TODO
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.remove()
    }

    //CHECK MARK
    if (item.classList[0] ==="complete-btn"){
      const todo = item.parentElement;
      todo.classList.toggle("completed");
     }
    }