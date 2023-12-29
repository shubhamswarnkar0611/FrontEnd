const posts =[];
let lastActivityTime=null;

function createPost(post){
    return new Promise((res,rej)=>{
     setTimeout(()=>{
        posts.push({post,lastActivityTime})
        res();
     },1000) 
    });
}

function updateLastUserActivityTime(){
    return new Promise((res,rej)=>{
       setTimeout(()=>{
        lastActivityTime=new Date();
        res(lastActivityTime);
       },1000) 
    });
}

function deletePost() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (posts.length > 0) {
          const deletedPost = posts.pop();
          resolve(deletedPost);
        } else {
          reject("ERROR: ARRAY IS EMPTY");
        }
      }, 1000);
    });
  }

  function logPostsAndActivity() {
    console.log("Posts:", posts);
    console.log("Last Activity Time:", lastActivityTime);
  }

  createPost({ title: "Post 1" })
  .then(() => updateLastUserActivityTime())
  .then(() => {
    logPostsAndActivity();
    return createPost({ title: "Post 2" });
  })
  .then(() => updateLastUserActivityTime())
  .then(() => {
    logPostsAndActivity();
    return deletePost();
  })
  .then(() => {
    logPostsAndActivity();
  })
  .catch((error) => {
    console.error("Error:", error);
  });
