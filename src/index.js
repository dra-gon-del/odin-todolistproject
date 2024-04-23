import './styles.css';


console.log('hello world');

//project list js

const listsContainer = document.querySelector('[data-lists]')

let lists = [];




//to do list js

const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");
const addToDo = document.getElementById("addToDo").addEventListener("click", addTask);


function addTask(){
    if(inputBox.value === ""){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        }

    inputBox.value = "";
};

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){ 
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);