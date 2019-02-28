// TO-DO LIST

const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".activities");
const secondCardBody = document.querySelectorAll(".card-body")[1];


eventListener();

function eventListener(){
    form.addEventListener("submit",addTodo);
    secondCardBody.addEventListener("click",deleteTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI); //Sayfa yenilendiğinde değerler localStorage'ten çekilir ve UI üzerinde silinmez.
    
}
function loadAllTodosToUI(){ 
    let todos = getTodosFromStorage();
    todos.forEach(function(todo){
        addTodoToUI(todo);
    })

}

function addTodo(e){

    const newTodo = todoInput.value.trim(); //trim(); => Başta ve sondaki boşlukları otomatik siler.
    if(newTodo===""){
        alert("Liste boş bırakılamaz.");
    }
    else{
    addTodoToUI(newTodo);
    addTodoToStorage(newTodo);
    }
    e.preventDefault(); //formun sayfaya yönlenmemesi için.

}
function getTodosFromStorage(){ // Storage'den tüm todoları alır.
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else
    {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

function addTodoToUI(newTodo){ //String değeri arayüze ekler

    const listItem= document.createElement("li");
    console.log(listItem);

     //List item oluşturma
    const link = document.createElement("a");

    //Link oluştuma
    link.href="#";
    link.className="delete-item";
    link.innerHTML="<i class = 'fa fa-remove'></i>";

    listItem.className="list-group-item d-flex justify-content-between";

        //Text Node Ekle
        listItem.appendChild(document.createTextNode(newTodo));
        listItem.appendChild(link);

        //Todo List'e Item Ekleme
        todoList.appendChild(listItem);
        todoInput.value="";
}

function deleteTodo(e){
    if(e.target.className ==="fa fa-remove"){
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
    }
}
function addTodoToStorage(newTodo){
    let todos = getTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));//Arrayler'i string yapar. Güncelleriz.
}

function deleteTodoFromStorage(deletetodo){

    let todos = getTodosFromStorage();
    todos.forEach(function (todo,index){
        if(todo === deletetodo){
            todos.splice(index,1); // Arrayden değeri silme => https://stackoverflow.com/questions/5767325/how-do-i-remove-a-particular-element-from-an-array-in-javascript
        }
    });
    localStorage.setItem("todos",JSON.stringify(todos)); //güncelle
}