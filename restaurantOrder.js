let add_order_button = document.getElementById("addOrder");
add_order_button.addEventListener("click", loadToCrud);
let url = "https://crudcrud.com/api/7c5cbdbce8f741ea88cdeea17c25928b/order";
// getOrderFromCrud();

// function getOrderFromCrud(){
//  axios.get(url)
// .then((res)=>{
// res.data.map((item)=>{
//   showUserOrderToScreen(item);
// })
// })
// .catch((err)=>{
//   console.log(err.message);
// });
// }

function loadToCrud(e) {
  e.preventDefault();

  let new_price = document.getElementById("price").value;
  let new_dish_name = document.getElementById("dishName").value;
  let new_table = document.getElementById("table").value;

  let obj = {
    new_price,
    new_dish_name,
    new_table,
  };

  axios.post(url, obj).then((res) => {
    showUserOrderToScreen(res.data);
  });
}

function showUserOrderToScreen(data) {
  let childElement = document.createElement("li");

  childElement.textContent =
    data.new_price + "-" + data.new_table + "-" + data.new_dish_name;

  let deleteChild = document.createElement("button");
  deleteChild.className = "btn btn-danger ";
  deleteChild.innerHTML = "DELETE";
  deleteChild.id = data._id;

  deleteChild.onclick = async (e) => {
    try {
      let res = await axios.delete(`${url}/${e.target.id}`);
      alert("deleted successfully");
      const parentEle = document.getElementById(data.new_table);
      parentEle.removeChild(childElement);
    } catch (err) {
      console.log(err);
    }
    // .then(()=>{
    //   alert("deleted successfully");
    //   console.log(data.new_table);
    //   const parent_div = document.getElementById(data.new_table);
    //   parent_div.removeChild(childElement)
    //   // if(data.new_table=="table1"){
    //   //   parentElement1.removeChild(childElement);
    //   //    }
    //   //  else if(data.new_table=="table2"){
    //   //   parentElement2.removeChild(childElement);
    //   //  }
    //   //  else{
    //   //   parentElement3.removeChild(childElement);
    //   //  }
    // })
    // .catch((err)=>{
    //   console.log(err.message);
    // })
  };

  childElement.appendChild(deleteChild);

  const parent_div = document.getElementById(data.new_table);
  parent_div.appendChild(childElement);
  parent_div.className = "list-group margin";
}

getDataAndShowOnscreen();
async function getDataAndShowOnscreen() {
  // axios.get(url)
  // async .then((res) => {
  //   res.data.map((item) => {
  //     showUserOrderToScreen(item);
  //   });
  // })
  // .catch((err) => {
  //   console.log(err.message);
  // });
  try {
    let res = await axios.get(url);
    res.data.map((item) => {
      showUserOrderToScreen(item);
    });
  } catch (err) {
    console.log("aa gya error", err);
  }
}
