let itemList = document.querySelector("#items");
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor="#f4f4f4";

//lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.style.fontWeight="bold";

//lastchild
console.log(itemList.lastChild);

//createchild
let child =itemList.creatChild=("<div>child</div>");
console.log(child);

//firstelementchild
console.log(itemList.firstElementChild);
itemList.firstElementChild.style.fontWeight="bold";

//firstchild
console.log(itemList.firstChild);

//nextSibling
console.log(itemList.nextSibling);

//nextelementsibling
console.log(itemList.nextElementSibling);
itemList.nextElementSibling.innerHTML="hello world";

//previoussibling
//previouselementsibling
console.log(itemList.previousElementSibling);
console.log(itemList.previousSibling);

// createelement
// setAttribute
// createtesxtnode
// appendchild

//1
let newDiv = document.createElement("div");
let addDivText = document.createTextNode("hello world");
newDiv.setAttribute("title", "hello div");
console.log(newDiv);
newDiv.appendChild(addDivText);

let container= document.querySelector("header .container");
let addBefore = document.querySelector("#header-title");

container.insertBefore(newDiv,addBefore);

//2
let addAfter=document.querySelector("#items");
let addBefore2=document.querySelector("#addBefore");
addAfter.insertBefore(newDiv,addBefore2);







