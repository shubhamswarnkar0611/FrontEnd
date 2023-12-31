let url =
  "https://crudcrud.com/api/99e40e61675f4b908dbc9bfbc3866c26/appointment";

let expense = document.getElementById("post");
let editButton = document.getElementById("patch");
expense.addEventListener("click", loadToLocalStorage);
editButton.addEventListener("click", editButtonFunction);



function editButtonFunction() {
//   e.preventDefault();
  
  let objId = document.getElementById("obj_id").value;
  let newExpense = document.getElementById("expense").value;
  let newDescription = document.getElementById("description").value;
  let newCategory = document.getElementById("category").value;

  let obj = {
    newExpense,
    newDescription,
    newCategory,
  };

  axios
  .put(`${url}/${objId}`, obj)
  .then((res)=>{
    showUserExpenseToScreen(obj);
    alert("Edit successfully added")
  })
  .catch(err => {
    console.log(err.message);
  })
}

getDataAndShowOnscreen();
function getDataAndShowOnscreen() {
  axios
    .get(url)
    .then((res) => {
      res.data.map((item) => {
        showUserExpenseToScreen(item);
      });
    })
    .catch((err) => {
      console.log(err.mess);
    });
}

function loadToLocalStorage(e) {
  e.preventDefault();
  let newExpense = document.getElementById("expense").value;
  let newDescription = document.getElementById("description").value;
  let newCategory = document.getElementById("category").value;

  let obj = {
    newExpense,
    newDescription,
    newCategory,
  };

  axios
    .post(url, obj)
    .then((res) => {
      console.log(res.data);
      showUserExpenseToScreen(res.data);
    })
    .catch((err) => {
      console.log(err.message);
    });
}

function showUserExpenseToScreen(obj) {
  //showung on screen code
  let parentElement = document.getElementById("parentEle");
  let childElement = document.createElement("li");
  // childElement.className="list-group";

  childElement.textContent =
    obj.newExpense + "--" + obj.newDescription + "--" + obj.newCategory;

  //delete code
  let deleteChild = document.createElement("button");
  deleteChild.textContent = "Delete";
  deleteChild.className = "btn btn-danger  w-2";
  deleteChild.id = obj._id;

  deleteChild.onclick = (event) => {
    axios
      .delete(`${url}/${event.target.id}`)
      .then(() => {
        alert("Deleted successfully");
      })
      .catch((error) => {
        console.log(error.msg);
      });

    parentElement.removeChild(childElement);
  };
  childElement.appendChild(deleteChild);

  //edit code
  let editChild = document.createElement("button");
  editChild.textContent = "Edit";
  editChild.className = "btn btn-info";
  editChild.id = obj._id;
  editChild.onclick = () => {
    // editButtonFunction(obj._id);
    parentElement.removeChild(childElement);

    document.getElementById("expense").value = obj.newExpense;
    document.getElementById("description").value = obj.newDescription;
    document.getElementById("category").value = obj.newCategory;
    document.getElementById("obj_id").value = obj._id;
  };

  childElement.appendChild(editChild);

  parentElement.appendChild(childElement);
}
