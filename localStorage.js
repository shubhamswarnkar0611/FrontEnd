let expense= document.getElementById("addExpense");
expense.addEventListener("submit",loadToLocalStorage);

function loadToLocalStorage(e) {
    e.preventDefault();
    let newExpense= document.getElementById("expense").value;
    let newDescription = document.getElementById("description").value;
    let newCategory= document.getElementById("category").value;  

    let obj={
        newExpense,
        newDescription,
        newCategory
    };

    localStorage.setItem(newDescription,JSON.stringify(obj));
    showUserExpenseToScreen(obj);
};

function showUserExpenseToScreen(obj) {
    //showung on screen code
    let parentElement = document.getElementById("parentEle");
    let childElement = document.createElement("li");
    // childElement.className="list-group";

    childElement.textContent= obj.newExpense+"--"+obj.newDescription+"--"+obj.newCategory;

    //delete code
    let deleteChild = document.createElement("button");
    deleteChild.textContent="Delete";
    deleteChild.className="btn btn-danger  w-2";
    deleteChild.onclick= ()=>{
        localStorage.removeItem(obj.newDescription);
        parentElement.removeChild(childElement);
    };
    childElement.appendChild(deleteChild);

   //edit code
   let editChild = document.createElement("button");
   editChild.textContent="Edit";
   editChild.className="btn btn-info";
   editChild.onclick=()=>{
     localStorage.removeItem(obj.newDescription);
     parentElement.removeChild(childElement);

     document.getElementById("expense").value=obj.newExpense;
     document.getElementById("description").value=obj.newDescription;
     document.getElementById("category").value=obj.newCategory;  
          
    };

   childElement.appendChild(editChild);


   parentElement.appendChild(childElement);
};