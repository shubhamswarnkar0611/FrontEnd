let form=document.getElementById("addForm");
let insertItem = document.getElementById("items");

form.addEventListener('submit', addItem);
insertItem.addEventListener('click',removeItem);

function addItem(e){
    e.preventDefault();
let newItem=document.getElementById("item").value;

let addHtml= document.createElement("li");
addHtml.className="list-group-item";

let deleteItem= document.createElement("button");
deleteItem.className="btn btn-danger btn-sm float-right mx-2 delete";

let editItem= document.createElement("button");
editItem.className="btn btn-primary btn-sm float-right edit";


addHtml.appendChild(document.createTextNode(newItem));
deleteItem.appendChild(document.createTextNode('X'));
editItem.appendChild(document.createTextNode('Edit'));

addHtml.appendChild(deleteItem);
addHtml.appendChild(editItem);



//console.log(addHtml);



//adding new li
insertItem.appendChild(addHtml);


}

function removeItem(e){
    
    if(e.target.classList.contains("delete")){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            insertItem.removeChild(li);
        }

    }
}

