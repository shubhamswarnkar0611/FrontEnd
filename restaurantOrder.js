
let add_order_button= document.getElementById("addOrder");
add_order_button.addEventListener("click",loadToCrud);
let url ="https://crudcrud.com/api/dd9f988c9ba14f69aa7b2d3cfac50411/order"
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

function loadToCrud(e){
    e.preventDefault();
    
    let new_price=document.getElementById("price").value;
    let new_dish_name=document.getElementById("dishName").value;
    let new_table=document.getElementById("table").value;
     

    let obj={
        new_price,
        new_dish_name,
        new_table
    }


    axios
    .post(url,obj)
    .then((res)=>{
     showUserOrderToScreen(res.data);
    })




}

function showUserOrderToScreen(data){

   let parentElement1 = document.getElementById("table1");
   let parentElement2 = document.getElementById("table2");
   let parentElement3 = document.getElementById("table3");
   let childElement = document.createElement("li");

   childElement.textContent = data.new_price + "-" + data.new_table + "-" + data.new_dish_name;

   let deleteChild = document.createElement("button");
   deleteChild.className = "btn btn-danger  w-2";
   deleteChild.innerHTML="DELETE";
   deleteChild.id=data._id;

   deleteChild.onclick = (e)=>{
      axios
      .delete(`${url}/${e.target.id}`)
      .then(()=>{
        alert("deleted successfully");
        if(data.new_table=="table1"){
          parentElement1.removeChild(childElement);
           }
         else if(data.new_table=="table2"){
          parentElement2.removeChild(childElement);
         }
         else{
          parentElement3.removeChild(childElement);
         }
      })
      .catch((err)=>{
        console.log(err.message);
      })
   }

   childElement.appendChild(deleteChild);

   if(data.new_table=="table1"){
    parentElement1.appendChild(childElement);
     }
   else if(data.new_table=="table2"){
    parentElement2.appendChild(childElement);
   }
   else{
    parentElement3.appendChild(childElement);
   }


}

getDataAndShowOnscreen();
function getDataAndShowOnscreen() {
  
    axios.get(url)
    .then((res) => {
      res.data.map((item) => {
        showUserOrderToScreen(item);
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
}


