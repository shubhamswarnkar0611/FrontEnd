// let expense = document.getElementById("addExpense");
// expense.addEventListener("submit", addExpense);
// getDataAndShowOnscreen();

// function getDataAndShowOnscreen() {
//   axios
//     .get(
//       "https://crudcrud.com/api/5c55716ed02245a895fdf3b2eda0d603/appointment"
//     )
//     .then((res) => {
//       console.log(res.data[0]);
//       showUserExpenseToScreen(res.data);
//     })
//     .catch((err) => {
//       console.log(err.msg);
//     });
// }

// function addExpense(e) {
//   e.preventDefault();
//   let newExpense = document.getElementById("expense").value;
//   let newDescription = document.getElementById("description").value;
//   let newCategory = document.getElementById("category").value;

//   let obj = {
//     newExpense,
//     newDescription,
//     newCategory,
//   };

//   axios
//     .post(
//       "https://crudcrud.com/api/5c55716ed02245a895fdf3b2eda0d603/appointment",
//       obj
//     )
//     .then((res) => {
//       console.log(res.data);
//       showUserExpenseToScreen([res.data]);
//     })
//     .catch((err) => {
//       console.log(err.message);
//     });
// }

// function showUserExpenseToScreen(data) {
//   console.log(data);
//   //showung on screen code
//   let parentElement = document.getElementById("parentEle");
//   // childElement.className="list-group";

//   data.map((item) => {
//     //delete code
//     let deleteChild = document.createElement("button");
//     deleteChild.textContent = "Delete";
//     deleteChild.className = "btn btn-danger  w-2";
//     deleteChild.onclick = () => {
//       localStorage.removeItem(obj.newDescription);
//       parentElement.removeChild(childElement);
//     };

//     //edit code
//     let editChild = document.createElement("button");
//     editChild.textContent = "Edit";
//     editChild.className = "btn btn-info";
//     editChild.onclick = () => {
//       localStorage.removeItem(obj.newDescription);
//       parentElement.removeChild(childElement);

//       document.getElementById("expense").value = obj.newExpense;
//       document.getElementById("description").value = obj.newDescription;
//       document.getElementById("category").value = obj.newCategory;
//     };

//     let childElement = document.createElement("li");
//     const html_data = `<span class='exprense'>${item.newExpense}</span> <span class='description'>${item.newDescription}</span> <span class='category'>${item.newCategory}</span>`;
//     console.log(item);
//     console.log(html_data);
//     childElement.innerHTML = html_data;
//     childElement.appendChild(deleteChild);
//     childElement.appendChild(editChild);
//     parentElement.appendChild(childElement);
//   });
// }



let expense= document.getElementById("addExpense");
expense.addEventListener("submit",loadToLocalStorage);
getDataAndShowOnscreen();
function getDataAndShowOnscreen() {
    axios
      .get(
        "https://crudcrud.com/api/5c55716ed02245a895fdf3b2eda0d603/appointment"
      )
      .then((res) => {
       res.data.map((item)=>{
        showUserExpenseToScreen(item)})
      })
      .catch((err) => {
        console.log(err.msg);
      });
  }

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

    axios
    .post(
      "https://crudcrud.com/api/5c55716ed02245a895fdf3b2eda0d603/appointment",
      obj
    )
    .then((res) => {
      console.log(res.data);
      showUserExpenseToScreen(res.data);
    })
    .catch((err) => {
      console.log(err.message);
    });

    
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
