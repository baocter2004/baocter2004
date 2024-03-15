var input = document.querySelector("input");
var btn = document.querySelector("button");
var form = document.querySelector("form");
var todos = document.querySelector(".todos");

function addKeyWords(object) {

    // <li>
    //     <span>Test</span>
    //     <i class="fa-solid fa-trash-can"></i>
    // </li>

    var li = document.createElement("li");
    li.innerHTML = `
    <span>${object.text}</span>
    <i class="fa-solid fa-trash-can"></i>
    `;
    if(todos.status === "completed"){
        li.setAttribute("class","completed");
    }

    li.addEventListener("click",function(){
        this.classList.toggle("completed");
    });

    li.querySelector('i').addEventListener('click',function(){
        this.parentElement.remove();
    })
    todos.appendChild(li);
}

form.addEventListener('submit', function (even) {
    even.preventDefault();
    let val = input.value.trim();
    if (val) {
        addKeyWords({
            text: val,
            status: "completed"
        });
        saveTodoList();
    }
    input.value = "";
});

function saveTodoList(){
    let todoList = document.querySelectorAll("li");
    let todoStroage = [];
    todoList.forEach(function(item){
        let text = item.querySelector('span').innerText;
        let status = item.querySelector('span').getAttribute('class');
        todoStroage.push({
            text,
            status
        })
    });

    localStorage.setItem('todoList',JSON.stringify(todoStroage));
    
}

function init(){
    let data = JSON.parse(localStorage.getItem('todoList'));
    data.forEach(function(item){
        console.log(item);
        addKeyWords(item);
    })
}

init();