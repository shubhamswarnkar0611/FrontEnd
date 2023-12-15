let form=document.getElementById("addForm");
let insertItem = document.getElementById("items");
let filter = document.getElementById("filter");


form.addEventListener('submit', addItem);
insertItem.addEventListener('click',removeItem);
filter.addEventListener('keyup', searchItem);

function addItem(e){
    e.preventDefault();
let newItem=document.getElementById("item").value;
let newDesc=document.getElementById("addDscrp").value;

let addHtml= document.createElement("li");

addHtml.className="list-group-item";


let deleteItem= document.createElement("button");
deleteItem.className="btn btn-danger btn-sm float-right mx-2 delete";

let editItem= document.createElement("button");
editItem.className="btn btn-primary btn-sm float-right edit";


addHtml.appendChild(document.createTextNode(newItem));
addHtml.appendChild(document.createTextNode(newDesc));
// descHtml.appendChild(document.createTextNode(newDesc));

// addHtml.appendChild(document.createTextNode(newDesc));
console.log(addHtml);
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

// search item
function searchItem(e){
    let text=e.target.value.toLowerCase();
    
    var items = insertItem.getElementsByTagName('li');
    console.log(items);
    
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        let descName = item.childNodes[1].textContent;

        console.log(descName);
        if(itemName.toLowerCase().indexOf(text) != -1 || descName.toLowerCase().indexOf(text) != -1 ){
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    
}

