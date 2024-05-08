import './styles.css';


console.log('hello world');

//project list js

const listsContainer = document.querySelector('[data-lists]');

let lists = ['name', 'todo'];

function render() {
    clearElement(listsContainer);
    lists.forEach(list => {
        const listElement = document.createElement('li');
        listElement.classList.add("projectListName");
        listElement.innerText = list;
        listsContainer.appendChild(listElement);
    });
}

function clearElement(element){

};

render()