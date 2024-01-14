const url ="https://crudcrud.com/api/9d9f56fb00b04187baee074915fd3b16/appointment"
const add_post= document.getElementById("addPost");
add_post.addEventListener("click",addPost);
getRequestOnCrud();

async function getRequestOnCrud(){
 try{
  let res = await axios.get(url);
  console.log(res.data);
  res.data.map((item) => {
    showUserAppointmentToScreen(item);
  });
 }catch(err){
  console.log(err);
 }
 
}


async function addPost(e){
 let name=document.getElementById("name").value;
 let phone=document.getElementById("phone").value;   
 let email=document.getElementById("email").value;

 

 let obj={
    name,
    phone,
    email
}

// console.log(obj);
try{
let post = await axios.post(url,obj); 
showUserAppointmentToScreen(post.data); 
}catch(err){
  console.log(err.message);

}
}

function showUserAppointmentToScreen(obj){
    let parentElement=document.getElementById("parentEle");
    let childElement=document.createElement("li"); 

   
    childElement.textContent=`${obj.name}-${obj.phone}-${obj.email}`;

    //delete

    let deleteChild=document.createElement("button");
    deleteChild.textContent="DELETE"

    //edit
    
    let editChild=document.createElement("button");
    editChild.textContent="EDIT"

    //append
    
    childElement.appendChild(deleteChild);
    
    childElement.appendChild(editChild);
    parentElement.appendChild(childElement);
    
}