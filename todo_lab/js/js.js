function selectItem(checkbox) {
    let unfinishedList = document.getElementById('unfinished-list');
    let todoList = document.getElementById('todo-list');
    let elemParent = checkbox.parentElement;
    let elementChildren = elemParent.children;
    for (let index = 0; index < elementChildren.length; index++) {
        const element = elementChildren[index];
        if (element.tagName == 'SPAN') {
            if (checkbox.checked) {
                element.classList.add('done');
                todoList.appendChild(elemParent);
            } else {
                element.classList.remove('done');
                unfinishedList.appendChild(elemParent);
            }
        }
    }
}

function createListElement(name) {
    let check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    let liElem = document.createElement('li');
    let span = document.createElement('span');
    let txtNode = document.createTextNode(name);
    span.appendChild(txtNode);
    liElem.appendChild(check);
    liElem.appendChild(span);
    check.setAttribute('onclick', 'selectItem(this)');
    return liElem;
}

let entry = document.getElementById('newitem');

function addNewElement(e) {
    console.log(e);
    let list = document.getElementById('todo-list');
    if (e.keyCode == 13) {
        list.appendChild(createListElement(e.target.value));
        e.target.value = '';
    } 
};