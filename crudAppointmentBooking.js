const url ="https://crudcrud.com/api/f5df109bb6cb4333a30ccb94ba4761ad/appointment"
const add_post= document.getElementById("addPost");
const edit_post= document.getElementById("editPost");
add_post.addEventListener("click",addPost);
edit_post.addEventListener("click",editPost);
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
    deleteChild.textContent="DELETE";
    deleteChild.id=obj._id;
    deleteChild.onclick=(event)=>{
      axios
      .delete(`${url}/${event.target.id}`)
      .then(() => {
        alert("Deleted successfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
    parentElement.removeChild(childElement);
    }
    


    //edit
    
    let editChild=document.createElement("button");
    editChild.textContent="EDIT";
    editChild.id=obj._id;
    editChild.onclick=(event)=>{
      parentElement.removeChild(childElement);
      document.getElementById("name").value=obj.name;
      document.getElementById("email").value=obj.email;
      document.getElementById("phone").value=obj.phone;
      document.getElementById("id").value=obj._id
    };

    //append
    
    childElement.appendChild(deleteChild);
    
    childElement.appendChild(editChild);
    parentElement.appendChild(childElement);
    
}
async function editPost(){
  let name=document.getElementById("name").value;
  let phone=document.getElementById("phone").value;   
  let email=document.getElementById("email").value;
  let obj_id=document.getElementById("id").value;

  console.log(obj_id);

 
  
 
  let obj={
     name,
     phone,
     email
 }
 
 // console.log(obj);
 try{
 let res = await axios.put(`${url}/${obj_id}`,obj);
 console.log(res.data) 
 showUserAppointmentToScreen(obj); 
 }catch(err){
   console.log(err.message);
 
 }

}