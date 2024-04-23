import './styles.css';


console.log('hello world');

//project list js

const listsContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')

let lists = [{
    id: 1,
    name: 'name'
}, {
    id: 2,
    name: 'todo'
}]

newListForm.addEventListener('submit', e=> {
    e.preventDefault()
    const listName = newListInput.value
    if (listName == null || listName === '') return
    const list = createList(listName)
    newListInput.value = null
    lists.push(list)
    render()
})

function createList(name) {
    return { id: Date.now().toString(), name: name, tasks: [] }
}

function render(){
    clearElement(listsContainer)
    lists.forEach(list => {
        const listElement = document.createElement('li')
        listElement.dataset.listId = list.id
        listElement.classList.add("listName")
        listElement.innerText = list.name
        listsContainer.appendChild(listElement)
    })
}

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

render()


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