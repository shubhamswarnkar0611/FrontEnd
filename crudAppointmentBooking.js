const url ="https://crudcrud.com/api/67e5415038794e4fb50cf4c12b3be0c1/appointment"
const add_post= document.getElementById("addPost");
add_post.addEventListener("click",addPost);


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
showUserAppointmentToScreen(post); 
}catch(err){
  console.log(err.message);

}
}

function showUserAppointmentToScreen(obj){
    let parentElement=document.getElementById("parentEle");
    let childElement=document.createElement("li"); 

   
    childElement.textContent=`${obj.data.name}-${obj.data.phone}-${obj.data.email}`;

    //delete

    let deleteChild=document.createElement("button");
    deleteChild.textContent="DELETE"

    //edit
    
    let editChild=document.createElement("button");
    editChild.textContent="EDIT"

    //append
    
    childElement.appendChild(deleteChild)
    
    childElement.appendChild(editChild);
    parentElement.appendChild(childElement);
}